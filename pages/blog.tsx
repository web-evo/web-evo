import Link from 'next/link';
import React from 'react';
import styles from '../styles/blog.module.scss';
import CommonHead from '../components/common-head';
import axios from 'axios';
import Markdown from '../core/unit/markdown';
import {Container, Paper, Skeleton} from '@mui/material';
/**
 * Blog Page
 * @return {JSX.Element}
 */
function Blog({blogs}: {blogs: any[]}) {
  return (
    <Container maxWidth={'md'}>
      <div>
        <CommonHead title={'獠 - 如果想生存的话，什么都要学'}/>
        <div>
          <div className={styles['blog-wrapper']}>
            {blogs.map((blog, index) => (
              <Link href={`/blogs/${blog['_id']}`} key={index}>
                <Paper elevation={1} sx={{margin: '10px 0'}}>
                  <div className={styles['blog-item']} key={index}>
                    <span className={styles['blog-title']}>{blog.title}</span>
                    <div className={styles['blog-description']}>
                      {Markdown.intercept(blog.mark_content, 155)}
                    </div>
                    <Skeleton variant="rectangular"/>
                  </div>
                </Paper>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
Blog.getInitialProps = async (ctx: any) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/blogs`;
  const res = await axios.get(url);
  return {blogs: res.data};
};
export default Blog;
