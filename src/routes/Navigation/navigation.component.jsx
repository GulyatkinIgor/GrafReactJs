import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';


import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  Nomer,
  } from './navigation.styles';

const Navigation = () => {
  
  return (
  <div>
  <section class="w-full px-8 text-gray-700 bg-white">
    <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div class="relative flex flex-col md:flex-row">
            <a href="/" class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                <span class="mx-auto text-xl font-black leading-none text-gray-900 select-none">АН Графский</span>
            </a>
            <nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
                <a href="uslugi" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Услуги</a>
                <a href="aboutus" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">О компании</a>
                {/* <a href="commerce" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Коммерческая</a> */}
                <a href="kotetg" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Котетджные поселки</a>
                <a href="novostroiki" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Новостройки</a>
                <a href="sales" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Продажа</a>
                <a href="rent" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Аренда</a>
            </nav>
        </div>

        <div class="justify-end">
            <a href="#" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-black border border-transparent rounded-md shadow-sm hover:bg-gray-500 ">
            г.Казань ул.Ф.Амирхана 12А 89520379479
            </a>
        </div>
    </div>
</section>
  </div>
  );
};

export default Navigation;
