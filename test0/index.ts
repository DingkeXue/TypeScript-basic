import jQuery from './jQuery'
let setting:jQuery.Settings = {
    method: 'GET'
};

jQuery.ajax('http://baidu.com', setting);
