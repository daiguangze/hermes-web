'use client'
import "./test.scss";
import { useState } from 'react'

const user = {
    name : 'daiguangze',
    imageUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fe7e7350a-255c-4520-b190-9c6d2a9be4a9%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1705649737&t=3fddc54c895bd536004a2466295c83a4',
    imageSize : 90
};

export function Test(){
    return (
        <>
        <h1>About</h1>
        <p>Hello there . <br />  How do you do ?</p>
        </>
        );
}

const users = [
    {id:1,name:'daiguangze1',imageUrl:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fe7e7350a-255c-4520-b190-9c6d2a9be4a9%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1705649737&t=3fddc54c895bd536004a2466295c83a4',imageSize:90},
    {id:2,name:'daiguangze2',imageUrl:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fe7e7350a-255c-4520-b190-9c6d2a9be4a9%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1705649737&t=3fddc54c895bd536004a2466295c83a4',imageSize:90},
    {id:3,name:'daiguangze3',imageUrl:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fe7e7350a-255c-4520-b190-9c6d2a9be4a9%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1705649737&t=3fddc54c895bd536004a2466295c83a4',imageSize:90},
];

const userItems = users.map(a => 
    <>
    <h1>{a.name}</h1>
    <img className="avatar"
    src={a.imageUrl} 
    alt={'photo of '+a.name} 
    style ={{
        width: a.imageSize,
        height: a.imageSize
    }}
    />
    </>
    );
export function MyComponent(){
    return(
    <>
    {userItems}
    </>
        );
}

export function MyButton({count,onClick}:{count:any,onClick:any}) {

    // count : 变量   setCount : 更新用的函数
    // const [count,setCount] = useState(0);
    // function aaa(){
    //     setCount(count+1);
    // } 

    return (
        <button onClick={onClick}> 
            Click {count} times! 
        </button>
    );
}