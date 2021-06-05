import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()


const imageMap = [
    { path: '/drone1.png', title: ''},
    { path: '/drone2.png', title: ''},
    { path: '/drone3.png', title: ''},
    { path: '/drone4.png', title: ''},
    { path: '/112.jpg', title: ''},
    { path: '/1.jpg', title: ''},
    { path: '/2.jpg', title: ''},
    { path: '/3.jpg', title: ''},
    { path: '/4.jpg', title: ''},
    { path: '/5.jpg', title: ''},
    { path: '/6.jpg', title: ''},
    { path: '/7.jpg', title: ''},
    { path: '/8.jpg', title: ''},
    { path: '/9.jpg', title: ''},
    { path: '/10.jpg', title: ''},
    { path: '/11.jpg', title: ''},
    { path: '/12.jpg', title: ''},
    { path: '/13.jpg', title: ''},
    { path: '/14.jpg', title: ''},
    { path: '/15.jpg', title: ''},
    { path: '/16.jpg', title: ''},
    { path: '/17.jpg', title: ''},
    { path: '/18.jpg', title: ''},
    { path: '/19.jpg', title: ''},
    { path: '/20.jpg', title: ''}
].map((img, index) => ({  
    ...img
    , index: index
    , fullPath: serverRuntimeConfig.staticFolder+img.path 
}) )

//imageMap = imageMap.map((img, index) => img.index = index);
export default imageMap;