import React from 'react';
import styles from '../styles/hello.module.scss';
import Link from 'next/link';
import CommonHead from '../components/common-head';
import Image from 'next/image';
import {Images} from '../core/libs/images';
import {Button} from '@mui/material';

/**
 * @class Index
 * @extends React.Component
 */
export default function Index() {
  // const options: any = {
  //   'autoPlay': true,
  //   'background': {
  //     'color': {
  //       'value': '#000000',
  //     },
  //     'image': '',
  //     'position': '',
  //     'repeat': '',
  //     'size': '',
  //     'opacity': 1,
  //   },
  //   'backgroundMask': {
  //     'composite': 'destination-out',
  //     'cover': {
  //       'color': {
  //         'value': '#fff',
  //       },
  //       'opacity': 1,
  //     },
  //     'enable': false,
  //   },
  //   'fullScreen': {
  //     'enable': true,
  //     'zIndex': -1,
  //   },
  //   'detectRetina': true,
  //   'duration': 0,
  //   'fpsLimit': 120,
  //   'interactivity': {
  //     'detectsOn': 'window',
  //     'events': {
  //       'onClick': {
  //         'enable': false,
  //         'mode': [],
  //       },
  //       'onDiv': {
  //         'selectors': [],
  //         'enable': false,
  //         'mode': [],
  //         'type': 'circle',
  //       },
  //       'onHover': {
  //         'enable': false,
  //         'mode': [],
  //         'parallax': {
  //           'enable': false,
  //           'force': 2,
  //           'smooth': 10,
  //         },
  //       },
  //       'resize': true,
  //     },
  //     'modes': {
  //       'attract': {
  //         'distance': 200,
  //         'duration': 0.4,
  //         'easing': 'ease-out-quad',
  //         'factor': 1,
  //         'maxSpeed': 50,
  //         'speed': 1,
  //       },
  //       'bounce': {
  //         'distance': 200,
  //       },
  //       'bubble': {
  //         'distance': 200,
  //         'duration': 0.4,
  //         'mix': false,
  //       },
  //       'connect': {
  //         'distance': 80,
  //         'links': {
  //           'opacity': 0.5,
  //         },
  //         'radius': 60,
  //       },
  //       'grab': {
  //         'distance': 100,
  //         'links': {
  //           'blink': false,
  //           'consent': false,
  //           'opacity': 1,
  //         },
  //       },
  //       'light': {
  //         'area': {
  //           'gradient': {
  //             'start': {
  //               'value': '#ffffff',
  //             },
  //             'stop': {
  //               'value': '#000000',
  //             },
  //           },
  //           'radius': 1000,
  //         },
  //         'shadow': {
  //           'color': {
  //             'value': '#000000',
  //           },
  //           'length': 2000,
  //         },
  //       },
  //       'push': {
  //         'default': true,
  //         'groups': [],
  //         'quantity': 4,
  //       },
  //       'remove': {
  //         'quantity': 2,
  //       },
  //       'repulse': {
  //         'distance': 200,
  //         'duration': 0.4,
  //         'factor': 100,
  //         'speed': 1,
  //         'maxSpeed': 50,
  //         'easing': 'ease-out-quad',
  //       },
  //       'slow': {
  //         'factor': 3,
  //         'radius': 200,
  //       },
  //       'trail': {
  //         'delay': 1,
  //         'pauseOnStop': false,
  //         'quantity': 1,
  //       },
  //     },
  //   },
  //   'manualParticles': [],
  //   'motion': {
  //     'disable': false,
  //     'reduce': {
  //       'factor': 4,
  //       'value': true,
  //     },
  //   },
  //   'particles': {
  //     'bounce': {
  //       'horizontal': {
  //         'random': {
  //           'enable': false,
  //           'minimumValue': 0.1,
  //         },
  //         'value': 0,
  //       },
  //       'vertical': {
  //         'random': {
  //           'enable': false,
  //           'minimumValue': 0.1,
  //         },
  //         'value': 0,
  //       },
  //     },
  //     'collisions': {
  //       'bounce': {
  //         'horizontal': {
  //           'random': {
  //             'enable': false,
  //             'minimumValue': 0.1,
  //           },
  //           'value': 1,
  //         },
  //         'vertical': {
  //           'random': {
  //             'enable': false,
  //             'minimumValue': 0.1,
  //           },
  //           'value': 1,
  //         },
  //       },
  //       'enable': false,
  //       'mode': 'bounce',
  //       'overlap': {
  //         'enable': true,
  //         'retries': 0,
  //       },
  //     },
  //     'color': {
  //       'value': [
  //         '#1E00FF',
  //         '#FF0061',
  //         '#E1FF00',
  //         '#00FF9E',
  //       ],
  //       'animation': {
  //         'h': {
  //           'count': 0,
  //           'enable': true,
  //           'offset': 0,
  //           'speed': 30,
  //           'sync': true,
  //         },
  //         's': {
  //           'count': 0,
  //           'enable': false,
  //           'offset': 0,
  //           'speed': 1,
  //           'sync': true,
  //         },
  //         'l': {
  //           'count': 0,
  //           'enable': false,
  //           'offset': 0,
  //           'speed': 1,
  //           'sync': true,
  //         },
  //       },
  //     },
  //     'destroy': {
  //       'mode': 'none',
  //       'split': {
  //         'count': 1,
  //         'factor': {
  //           'random': {
  //             'enable': false,
  //             'minimumValue': 0,
  //           },
  //           'value': 3,
  //         },
  //         'rate': {
  //           'random': {
  //             'enable': false,
  //             'minimumValue': 0,
  //           },
  //           'value': {
  //             'min': 4,
  //             'max': 9,
  //           },
  //         },
  //         'sizeOffset': true,
  //       },
  //     },
  //     'gradient': [],
  //     'groups': {},
  //     'life': {
  //       'count': 0,
  //       'delay': {
  //         'random': {
  //           'enable': false,
  //           'minimumValue': 0,
  //         },
  //         'value': 0,
  //         'sync': false,
  //       },
  //       'duration': {
  //         'random': {
  //           'enable': false,
  //           'minimumValue': 0.0001,
  //         },
  //         'value': 0,
  //         'sync': false,
  //       },
  //     },
  //     'links': {
  //       'blink': false,
  //       'color': {
  //         'value': '#fff',
  //       },
  //       'consent': false,
  //       'distance': 100,
  //       'enable': false,
  //       'frequency': 1,
  //       'opacity': 1,
  //       'shadow': {
  //         'blur': 5,
  //         'color': {
  //           'value': '#00ff00',
  //         },
  //         'enable': false,
  //       },
  //       'triangles': {
  //         'enable': false,
  //         'frequency': 1,
  //       },
  //       'width': 1,
  //       'warp': false,
  //     },
  //     'move': {
  //       'angle': {
  //         'offset': 0,
  //         'value': 90,
  //       },
  //       'attract': {
  //         'distance': 200,
  //         'enable': false,
  //         'rotate': {
  //           'x': 3000,
  //           'y': 3000,
  //         },
  //       },
  //       'decay': 0.1,
  //       'distance': {},
  //       'direction': 'top',
  //       'drift': 0,
  //       'enable': true,
  //       'gravity': {
  //         'acceleration': 9.81,
  //         'enable': true,
  //         'inverse': false,
  //         'maxSpeed': 200,
  //       },
  //       'path': {
  //         'clamp': true,
  //         'delay': {
  //           'random': {
  //             'enable': false,
  //             'minimumValue': 0,
  //           },
  //           'value': 0,
  //         },
  //         'enable': false,
  //         'options': {},
  //       },
  //       'outModes': {
  //         'default': 'destroy',
  //         'bottom': 'bounce',
  //         'left': 'destroy',
  //         'right': 'destroy',
  //         'top': 'none',
  //       },
  //       'random': false,
  //       'size': false,
  //       'speed': {
  //         'min': 50,
  //         'max': 150,
  //       },
  //       'spin': {
  //         'acceleration': 0,
  //         'enable': false,
  //       },
  //       'straight': false,
  //       'trail': {
  //         'enable': false,
  //         'length': 10,
  //         'fillColor': {
  //           'value': '#000000',
  //         },
  //       },
  //       'vibrate': false,
  //       'warp': false,
  //     },
  //     'number': {
  //       'density': {
  //         'enable': false,
  //         'area': 800,
  //         'factor': 1000,
  //       },
  //       'limit': 300,
  //       'value': 0,
  //     },
  //     'opacity': {
  //       'random': {
  //         'enable': false,
  //         'minimumValue': 0.1,
  //       },
  //       'value': 1,
  //       'animation': {
  //         'count': 0,
  //         'enable': false,
  //         'speed': 0.3,
  //         'sync': true,
  //         'destroy': 'min',
  //         'startValue': 'max',
  //       },
  //     },
  //     'orbit': {
  //       'animation': {
  //         'count': 0,
  //         'enable': false,
  //         'speed': 1,
  //         'sync': false,
  //       },
  //       'enable': false,
  //       'opacity': 1,
  //       'rotation': {
  //         'random': {
  //           'enable': false,
  //           'minimumValue': 0,
  //         },
  //         'value': 45,
  //       },
  //       'width': 1,
  //     },
  //     'reduceDuplicates': false,
  //     'repulse': {
  //       'random': {
  //         'enable': false,
  //         'minimumValue': 0,
  //       },
  //       'value': 0,
  //       'enabled': false,
  //       'distance': 1,
  //       'duration': 1,
  //       'factor': 1,
  //       'speed': 1,
  //     },
  //     'roll': {
  //       'darken': {
  //         'enable': true,
  //         'value': 30,
  //       },
  //       'enable': true,
  //       'enlighten': {
  //         'enable': true,
  //         'value': 30,
  //       },
  //       'mode': 'vertical',
  //       'speed': {
  //         'min': 15,
  //         'max': 25,
  //       },
  //     },
  //     'rotate': {
  //       'random': {
  //         'enable': false,
  //         'minimumValue': 0,
  //       },
  //       'value': {
  //         'min': 0,
  //         'max': 360,
  //       },
  //       'animation': {
  //         'enable': true,
  //         'speed': 60,
  //         'sync': false,
  //       },
  //       'direction': 'random',
  //       'path': false,
  //     },
  //     'shadow': {
  //       'blur': 0,
  //       'color': {
  //         'value': '#000000',
  //       },
  //       'enable': false,
  //       'offset': {
  //         'x': 0,
  //         'y': 0,
  //       },
  //     },
  //     'shape': {
  //       'options': {
  //         'polygon': [
  //           {
  //             'sides': 5,
  //           },
  //           {
  //             'sides': 6,
  //           },
  //         ],
  //         'character': [
  //           {
  //             'value': [
  //               '💩',
  //               '🤡',
  //               '🍀',
  //               '🍙',
  //             ],
  //           },
  //         ],
  //       },
  //       'type': [
  //         'circle',
  //         'square',
  //         'polygon',
  //         'character',
  //         'character',
  //         'character',
  //       ],
  //     },
  //     'size': {
  //       'random': {
  //         'enable': false,
  //         'minimumValue': 1,
  //       },
  //       'value': 3,
  //       'animation': {
  //         'count': 0,
  //         'enable': false,
  //         'speed': 5,
  //         'sync': false,
  //         'destroy': 'none',
  //         'startValue': 'random',
  //       },
  //     },
  //     'stroke': {
  //       'width': 0,
  //     },
  //     'tilt': {
  //       'random': {
  //         'enable': false,
  //         'minimumValue': 0,
  //       },
  //       'value': {
  //         'min': 0,
  //         'max': 360,
  //       },
  //       'animation': {
  //         'enable': true,
  //         'speed': 60,
  //         'sync': false,
  //       },
  //       'direction': 'random',
  //       'enable': true,
  //     },
  //     'twinkle': {
  //       'lines': {
  //         'enable': false,
  //         'frequency': 0.05,
  //         'opacity': 1,
  //       },
  //       'particles': {
  //         'enable': false,
  //         'frequency': 0.05,
  //         'opacity': 1,
  //       },
  //     },
  //     'wobble': {
  //       'distance': 30,
  //       'enable': true,
  //       'speed': {
  //         'min': -15,
  //         'max': 15,
  //       },
  //     },
  //     'zIndex': {
  //       'random': {
  //         'enable': false,
  //         'minimumValue': 0,
  //       },
  //       'value': 0,
  //       'opacityRate': 1,
  //       'sizeRate': 1,
  //       'velocityRate': 1,
  //     },
  //   },
  //   'pauseOnBlur': true,
  //   'pauseOnOutsideViewport': true,
  //   'responsive': [],
  //   'style': {},
  //   'themes': [],
  //   'zLayers': 100,
  //   'emitters': {
  //     'autoPlay': true,
  //     'fill': true,
  //     'life': {
  //       'wait': false,
  //     },
  //     'rate': {
  //       'quantity': 10,
  //       'delay': 0.1,
  //     },
  //     'shape': 'square',
  //     'startCount': 0,
  //     'size': {
  //       'mode': 'percent',
  //       'height': 0,
  //       'width': 0,
  //     },
  //     'position': {
  //       'x': 50,
  //       'y': 100,
  //     },
  //   },
  // };
  /**
   * render the component
   * @return {JSX.Element}
   */
  return (
    <div className={styles['hello']}>
      <CommonHead/>
      <div>
        <h1 className={styles['h1']}>欢迎来到Web开发人员中心</h1>
      </div>
      <div className={styles['image']}>
        <Image src={Images.undrawProudCoder}/>
      </div>
      <div>
        <Link href={'/blog'}>
          <div>
            <Button color={'primary'} variant="contained">View our work</Button>
          </div>
        </Link>
      </div>
      <div>
        <h1 className={styles['h1']}>我们是一个对网络开发充满热情的开发人员团队</h1>
      </div>
      <div className={styles['image']}>
        <Image src={Images.undrawTeamCollaboration}/>
      </div>
      <div>
        <h1 className={styles['h1']}>我们在这里帮助您构建您的Web项目</h1>
      </div>
      <div className={styles['image']}>
        <Image src={Images.undrawUnderConstruction}/>
      </div>
      <div>
        <h1 className={styles['h1']}>我们提供丰富的技术文章支持，您可以在这里获得更多的帮助</h1>
      </div>
      <div className={styles['image']}>
        <Image src={Images.undrawBlogPost}/>
      </div>
      <div className="gap-2"/>
      {/* <Particles id="tsparticles" options={options}/>*/}
    </div>
  );
}
