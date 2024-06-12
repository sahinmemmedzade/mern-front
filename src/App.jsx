import React from 'react';
import belowup from './icons/Sort.png'
import tshirt from './icons/8e2c1947b16876117a87f3867e55e8e1.png'
import { IoIosMore } from 'react-icons/io';
import './App.css'
function App() {
  return (
    <div className='bg-gray-100 h-[140vh] flex justify-center items-center '>
    <div className='container flex flex-col bg-white border-1 h-[80%] w-[50%] pl-[30px] pr-[30px] pb-[30px] pt-[30px]' >
     <div className='containertop justify-between h-20  w-[100%] flex items-center my-4' >
<div className='containertopright flex items-center w-24   justify-center '>Product</div>
<div className='containertopleft w-64 h-10 flex items-center justify-around '>
  <button className='bg-black rounded-[4px] flex justify-center items-center text-white text-xs p-2 px-3' > Add product </button>
  <input type="text " className=' w-28 ps-1 focus:outline-none focus:ring-2 focus:ring-black' placeholder='search product' />
</div>
     </div>
     <div className='containermedium h-[100%]  w-[100%] '>
      <table className='w-[100%] '>
      <thead >
  <tr className='border-2 bg-red-200 '>
    <td  className='flex items-center justify-center '><img src={belowup} alt="" className='w-5 h-5' /></td>
    <td>Name</td>
    <td>Sku</td>
    <td>Price</td>
    <td>Stock</td>
    <td>Categories</td>
    <td className='mr-2 mt-10'>Action</td>
  </tr>
</thead>
  <tr className='h-12   '>
    <td className='flex items-center justify-center h-20'>
      <img src={tshirt} className='w-8 h-10  ' alt="" />
    </td>
    <td>
    Raw Black T-Shirt Lineup
    </td>
    <td>47514501</td>
    <td>$75.00</td>
 <td>In Stock</td>
  <td>T-shirt, Men</td>
  <td className='w-12     '><IoIosMore />
 </td>
  </tr>
  <tr className='h-12   '>
    <td className='flex items-center justify-center h-20'>
      <img src={tshirt} className='w-8 h-10  ' alt="" />
    </td>
    <td>
    Raw Black T-Shirt Lineup
    </td>
    <td>47514501</td>
    <td>$75.00</td>
 <td>In Stock</td>
  <td>T-shirt, Men</td>
  <td className='w-12     '><IoIosMore />
 </td>
  </tr>
  <tr className='h-12   '>
    <td className='flex items-center justify-center h-20'>
      <img src={tshirt} className='w-8 h-10  ' alt="" />
    </td>
    <td>
    Raw Black T-Shirt Lineup
    </td>
    <td>47514501</td>
    <td>$75.00</td>
 <td>In Stock</td>
  <td>T-shirt, Men</td>
  <td className='w-12     '><IoIosMore />
 </td>
  </tr>
  <tr className='h-12   '>
    <td className='flex items-center justify-center h-20'>
      <img src={tshirt} className='w-8 h-10  ' alt="" />
    </td>
    <td>
    Raw Black T-Shirt Lineup
    </td>
    <td>47514501</td>
    <td>$75.00</td>
 <td>In Stock</td>
  <td>T-shirt, Men</td>
  <td className='w-12     '><IoIosMore />
 </td>
  </tr> <tr className='h-12   '>
    <td className='flex items-center justify-center h-20'>
      <img src={tshirt} className='w-8 h-10  ' alt="" />
    </td>
    <td>
    Raw Black T-Shirt Lineup
    </td>
    <td>47514501</td>
    <td>$75.00</td>
 <td>In Stock</td>
  <td>T-shirt, Men</td>
  <td className='w-12     '><IoIosMore />
 </td>
  </tr> <tr className='h-12   '>
    <td className='flex items-center justify-center h-20'>
      <img src={tshirt} className='w-8 h-10  ' alt="" />
    </td>
    <td>
    Raw Black T-Shirt Lineup
    </td>
    <td>47514501</td>
    <td>$75.00</td>
 <td>In Stock</td>
  <td>T-shirt, Men</td>
  <td className='w-12     '><IoIosMore />
 </td>
  </tr> <tr className='h-12   '>
    <td className='flex items-center justify-center h-20'>
      <img src={tshirt} className='w-8 h-10  ' alt="" />
    </td>
    <td>
    Raw Black T-Shirt Lineup
    </td>
    <td>47514501</td>
    <td>$75.00</td>
 <td>In Stock</td>
  <td>T-shirt, Men</td>
  <td className='w-12     '><IoIosMore />
 </td>
  </tr> <tr className='h-12   '>
    <td className='flex items-center justify-center h-20'>
      <img src={tshirt} className='w-8 h-10  ' alt="" />
    </td>
    <td>
    Raw Black T-Shirt Lineup
    </td>
    <td>47514501</td>
    <td>$75.00</td>
 <td>In Stock</td>
  <td>T-shirt, Men</td>
  <td className='w-12     '><IoIosMore />
 </td>
  </tr>
      </table>
     </div>
     <div className='containerfooter '>

     </div>
    </div>
    </div>
  );
}

export default App;
