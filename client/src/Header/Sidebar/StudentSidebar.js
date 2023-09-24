import React, { useState } from 'react';
import Sidebar from 'react-sidebar';
import { Link } from 'react-router-dom';

const StudentSideBarComponent = (props) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };
  
    return (
      <Sidebar
        sidebar={<div class="w3-sidebar w3-bar-block">
        <a href="#" class="w3-bar-item w3-button w3-border-bottom">Link 1</a>
        <a href="#" class="w3-bar-item w3-button w3-border-bottom">Link 2</a>
        <a href="#" class="w3-bar-item w3-button">Link 3</a>
      </div>}
        open={sidebarOpen}
        onSetOpen={toggleSidebar}
        styles={{ sidebar: { background: 'white' } }} // Customize styles as needed
      >
        <button onClick={toggleSidebar}>Toggle Sidebar</button>
        <div>Main content goes here</div>
      </Sidebar>
    );
}

export default StudentSideBarComponent