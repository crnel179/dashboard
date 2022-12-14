import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButtons = ({ title, customFunction, icon, color, dotColor }) => (
    <TooltipComponent content={title} position='BottomCenter'>
        <button
            type='button'
            onClick={customFunction}
            style={{ color }}
            className='relative text-xl rounded-full p-3 hover:bg-light-gray'
        >
            <span
                style={{ background: dotColor }}
                className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
            />
            {icon}
        </button>
    </TooltipComponent>
);

const Navbar = () => {
    const {
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
    } = useStateContext();

    // track the screen size & resize
    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // toggles sidebar on & off upon screen size
    useEffect(() => {
        if (screenSize <= 900) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    return (
        <div className='flex justify-between p-2 md:mx-6 relative'>
            <NavButtons
                title='Menu'
                customFunction={() =>
                    setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                color='#cc0000'
                icon={<AiOutlineMenu />}
            />
            <div className='flex'>
                <NavButtons
                    title='Cart'
                    customFunction={() => handleClick('cart')}
                    color='#cc0000'
                    icon={<FiShoppingCart />}
                />
                <NavButtons
                    title='Chat'
                    dotColor='#03C9D7'
                    customFunction={() => handleClick('chat')}
                    color='#cc0000'
                    icon={<BsChatLeft />}
                />
                <NavButtons
                    title='Notifications'
                    dotColor='#03C9D7'
                    customFunction={() => handleClick('notification')}
                    color='#cc0000'
                    icon={<RiNotification3Line />}
                />
                <TooltipComponent content='Profile' position='BottomCenter'>
                    <div
                        className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
                        onClick={() => handleClick('userProfile')}
                    >
                        <img className='rounded-full w-8 h-8' src={Avatar} />
                        <p>
                            <span className='text-gray-400 text-14'>Hi, </span>{' '}
                            <span className='text-gray-400 font-bold ml-1 text-14'></span>
                        </p>
                        <MdKeyboardArrowDown className='text-gray-400 text-14' />
                    </div>
                </TooltipComponent>
                {isClicked.cart && <Cart />}
                {isClicked.chat && <Chat />}
                {isClicked.notification && <Notification />}
                {isClicked.userProfile && <UserProfile />}
            </div>
        </div>
    );
};

export default Navbar;
