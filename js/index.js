function show(){
    this.startData(this);
    this.pageResize(this);
    this.selectSearch(this);
}
show.prototype = {
    'clearLine':function(_this){
        for(let i = 0; i < _this.allSelectSearchLine.length;i++){
            _this.allSelectSearchLine[i].style.background = '';
        }
    },
    'startData':function(_this) {
        _this.container = document.querySelector('.container');
        _this.allSelectSearch = document.querySelectorAll('.navigationFont div');
        _this.allSelectSearchLine = document.querySelectorAll('.navigationFont span');
        _this.searchShowText = ['百度一下，一下你就知道', 'Google搜索', 'Bing搜索', '360搜素','搜索图片','搜索种子'];
        _this.searchName = ['word','q','q','q','q','name'];
        _this.searchWebsite = ['https://www.baidu.com/s','https://www.google.com/search','https://cn.bing.com/search','https://www.so.com/s','https://cn.bing.com/images/search','https://btorg.info/search.html']
        _this.searchShow = document.querySelector('.searchText');
        _this.searchForm = document.querySelector('.formDiv');
        _this.inputSearch = document.querySelector('.searchText');
    },
    'pageResize':function(_this){

            setInterval(function () {
                if(window.innerWidth<1200){
                    _this.container.style.width = innerWidth-15 + 'px';
                }else{
                    _this.container.style.width = 1200 + 'px';
                }
            },1);
    },
    'selectSearch':function(_this){
        for(let i = 0; i < _this.allSelectSearchLine.length;i++){
            _this.allSelectSearch[i].onclick = function(){
                _this.clearLine(_this);
                _this.allSelectSearchLine[i].style.background = '#808080';
                _this.searchShow.placeholder = _this.searchShowText[i];
                _this.searchForm.action = _this.searchWebsite[i];
                _this.inputSearch.name = _this.searchName[i];
            }
        }
    }

}
function $(){
    return new show();
}
