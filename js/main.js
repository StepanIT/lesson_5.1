'use strict';

const propsItemTwo = document.querySelectorAll('.props__item_two');
const propsItemFour = document.querySelectorAll('.props__item_four');

const item = document.querySelectorAll('.item');

const itemTitle = document.querySelectorAll('.item__title');

const propsList = document.querySelectorAll('.props__list');

const advertising = document.querySelectorAll('.ads');


propsItemFour[2].after(propsItemFour[5]);
propsItemTwo[7].after(propsItemTwo[8]);
propsItemTwo[8].after(propsItemTwo[9]);


const clonePropsListThree = propsList[3].cloneNode(true);
const clonePropsListFour = propsList[4].cloneNode(true);

propsList[3].replaceWith(clonePropsListFour);
propsList[4].replaceWith(clonePropsListThree);


const itemTitleOne = itemTitle[1].cloneNode(true);
const itemTitleThree = itemTitle[3].cloneNode(true);
const itemTitleFour = itemTitle[4].cloneNode(true);

itemTitle[1].replaceWith(itemTitleThree);
itemTitle[3].replaceWith(itemTitleFour);
itemTitle[4].replaceWith(itemTitleOne);


itemTitle[2].replaceChildren('This и прототипы объектов');

const itemZero = item[0].cloneNode(true);
item[0].remove();

item[3].after(itemZero);
advertising[0].remove();
