const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')

const tabActive = $('.tab-item.active')
const line = $('.tabs .line')

line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';

tabs.forEach((tab, index) => {//lặp qua từng phần tử
    const pane = panes[index]

    tab.onclick = function() {
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';
        
        this.classList.add('active')
        pane.classList.add('active')

    }
})

var i = 0, lengTabs = tabs.length;
setInterval( function() {         
// console.log(i);
    tabs[i].classList.remove('active');
    panes[i].classList.remove('active');
    //Kiểm tra nếu đi đến cuối mảng thì quay về đầu, 
    //Vì trước khi add class mình có tăng i lên 1 nên phải đưa về -1(+1 = 0)
    if (i==lengTabs-1) i=-1;
    tabs[++i].classList.add('active');  
    panes[i].classList.add('active');  
    line.style.left =tabs[i].offsetLeft + 'px';
    line.style.width =tabs[i].offsetWidth + 'px';          
},3000);
