declare namespace jQuery {
    interface Settings {
        method?:'POST' | 'GET';
        data?:any
    }
    function ajax(url:string, setData:Settings);
}
export default jQuery;
