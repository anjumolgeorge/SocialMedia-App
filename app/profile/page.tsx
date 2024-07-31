import React from 'react';
import Center from '../center/page';
import SidebarLeft from '../sidebarLeft/page';
import SidebarRight from '../sidebarRight/page';
import Message from '../messages/page';

const Profile = () => {
  return (
    <div className='bg-black flex'>
      <Center />
     <SidebarLeft/>
     <Message/>
    </div>
  );
}

export default Profile;
