import React, {useMemo, useState} from 'react';
import {Box, Button, Container, Grid, TextField, Typography} from '@mui/material';
import {Images} from '../core/libs/images';
import Image from 'next/image';
import {useSnackbar} from 'notistack';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';
import Request from '../core/unit/request';
import CommonHead from '../components/common-head';


/**
 * Contact page
 * @return {React.ReactElement}
 */
export default function Contact() {
  const {enqueueSnackbar} = useSnackbar();
  const [form, setForm] = useState({name: '', contact: '', email: '', mobilePhone: '', message: ''});
  const [formError, setFormError] = useState({name: false, contact: false, message: false});
  const submit = (e: any) => {
    e.preventDefault();
    console.log(form);
    const requestBody: any = {...form};
    Object.keys(requestBody).forEach((key) => requestBody[key] === '' && delete requestBody[key]);
    new Request(process.env['NEXT_PUBLIC_MIDDLEWARE_URL']).post('/customer', requestBody)
        .then(() => {
          enqueueSnackbar('提交成功', {variant: 'success'});
          setForm({name: '', contact: '', email: '', mobilePhone: '', message: ''});
        })
        .catch((err) => enqueueSnackbar(err.message, {variant: 'error'}));
  };
  const contactBlurHandler = () => {
    if (form.email === '' && form.mobilePhone === '') return setFormError({...formError, contact: true});
    if (form.contact !== '') {
      setFormError({...formError, contact: true});
      setForm({...form, email: '', mobilePhone: ''});
      return;
    }
    setFormError({...formError, contact: false});
  };
  const contactChangeHandler = ({target: {value}}: any) => {
    if (isEmail(value)) return setForm({...form, email: value, contact: ''});
    if (isMobilePhone(value, 'zh-CN')) return setForm({...form, mobilePhone: value, contact: ''});
    setForm({...form, contact: value});
  };
  const submitDisabled = useMemo(() => {
    const isError = formError.name || formError.contact || formError.message;
    const isInput = Object.values(form).some((v) => v !== '');
    return isError || !isInput;
  }, [form, formError]);
  return (
    <Container maxWidth={'lg'}>
      <CommonHead title={'联系 - WebEvolution'}/>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
        <Box sx={{margin: '20px 0'}}>
          <Image src={Images.undrawContactUs}/>
        </Box>
        <Typography
          variant={'h1'}
          sx={{margin: '20px 0'}} fontSize={{xs: '38px', sm: '68px'}} color={'#00B0FF'}>我们能帮你什么吗？</Typography>
        <Typography variant={'body1'} sx={{marginBottom: '50px'}}>
          填写下表，了解 WebEvolution 如何帮助您实现雄心勃勃的软件需求！
        </Typography>
        <Box sx={{margin: '20px 0'}}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={4}>
              <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography variant={'h3'} fontSize={{sm: '42px'}} color={'#00B0FF'}>让我们谈谈</Typography>
                <Box sx={{padding: '16px', textAlign: 'center', mb: '48px'}}>
                  <Typography variant={'h6'}>联系电子邮件:</Typography>
                  <a href={'mailto:dongjun1997@outllook.com?subject=你好!'}>
                    <Typography variant={'body1'}>dongjun1997@outllook.com</Typography>
                  </a>
                </Box>
                <Box sx={{padding: '16px', textAlign: 'center'}}>
                  <Typography variant={'h6'}>联系电话:</Typography>
                  <a href={'tel:+86 18691791512'}>
                    <Typography variant={'body1'}>+86 186 9179 1512</Typography>
                  </a>
                </Box>
              </Box>
            </Grid>
            <Grid item sx={{display: {xs: 'none', sm: 'block'}}} sm={2}/>
            <Grid item xs={12} sm={6}>
              <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography
                  variant={'h3'}
                  fontSize={{sm: '42px'}}
                  color={'#00B0FF'}
                  sx={{marginBottom: '10px', textAlign: 'center'}}>我们很乐意听取您的想法！</Typography>
                <Box component={'form'} onSubmit={submit}>
                  <Grid container gap={2}>
                    <Grid item xs={12}>
                      <TextField
                        label={'你的名字'}
                        fullWidth
                        required error={formError.name}
                        helperText={formError.name ? '名字是必须的' : ''}
                        onBlur={() => setFormError({...formError, name: form.name === ''})}
                        onChange={({target: {value}}) => setForm({...form, name: value})}/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label={'你的邮件或手机号'} fullWidth required
                        error={formError.contact}
                        helperText={formError.contact ? '邮箱或手机号码格式不正确' : ''}
                        onBlur={contactBlurHandler}
                        onChange={contactChangeHandler}/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label={'你的信息'}
                        fullWidth required multiline rows={4}
                        error={formError.message}
                        helperText={formError.message ? '信息是必须的' : ''}
                        onBlur={() => setFormError({...formError, message: form.message === ''})}
                        onChange={({target: {value}}) => setForm({...form, message: value})}/>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Button variant={'contained'} sx={{width: '150px'}} type={'submit'} disabled={submitDisabled}>
                          <Typography variant={'h6'} color={'white'}>提交</Typography>
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
