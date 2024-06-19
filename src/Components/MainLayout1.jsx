import React, { useState } from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import { Select, Space } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;
const MainLayout1 = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  
  
  
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
          <span className="sm-logo">
            <img src={"https://demo.lead-pro.in/images/small_light.png"}/>
          </span>
            <span className="lg-logo">
            <img src={"https://demo.lead-pro.in/images/light.png"}  style={{width: "130px"}}/>

            </span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({ key }) => {
            if (key == "logout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: '',
              icon: <UserOutlined />,
              label: 'Dashboard',
            },
            {
              key: 'product',
              icon: <VideoCameraOutlined />,
              label: 'Product',
            },
            {
              key: '',
              icon: <UploadOutlined />,
              label: 'Expenses Manager',
              children:[
                {
                    key: "expenses_category",
                    icon:  <VideoCameraOutlined className="fs-4" />,
                    label: "Expense Category",
                  
                },
                {
                    key: "expenses",
                    icon:  <VideoCameraOutlined className="fs-4" />,
                    label: "Expenses",
                  
                }

              ]
            },
            {
                key: '',
                label: 'user Mangement',
                type: 'group',
                children: [
                  {
                    key: 'staff_members',
                    label: 'Staff Members',
                  },
                  {
                    key: 'salesmans',
                    label: 'Salesmans',
                    children:[
                      {
                        
                          key: "salesmans",
                          icon:  <VideoCameraOutlined className="fs-4" />,
                          label: "Salesmans",
                        
                      },
                      {
                        key: "Salesmans_Booking",
                        icon:  <VideoCameraOutlined className="fs-4" />,
                        label: "Salesmans Booking",
                      
                    }
                    ]
                  },
                ],
              },

              {
                key: 'grp',
                label: 'Lead Mangement',
                type: 'group',
                children: [
                  {
                    key: 'call_manager',
                    label: 'Call Manager',
                  },
                  {
                    key: 'compaigns',
                    label: 'Compaigns',
                  },
                  {
                    key: 'lead_calls',
                    label: 'Lead & Calls',
                    children:[
                      {
                        
                          key: "leads",
                          icon:  <VideoCameraOutlined className="fs-4" />,
                          label: "Leads",
                        
                      
                      },
                      {
                        key: "call_logs",
                        icon:  <VideoCameraOutlined className="fs-4" />,
                        label: "Call Logs",
                      
                    },
                    {
                      key: "Lead_Notes",
                      icon:  <VideoCameraOutlined className="fs-4" />,
                      label: "Lead Notes",
                    
                  }

                    ]
                  },
                  {
                    key: '14',
                    label: 'Lead Follow up',
                  },

                ],
              },
              
            {
              key: 'grp',
              label: 'Setting',
              type: 'group',
              children: [
                {
                  key: '13',
                  icon:<VideoCameraOutlined className="fs-4" />,
                  label: 'Lead Table Feild',
                },
                {
                  key: '14',
                  icon:<VideoCameraOutlined className="fs-4" />,
                  label:'Messaging',
                  children:[
                    {
                    key:'15',
                    icon:  <VideoCameraOutlined className="fs-4" />,
                    label:'Email Template'
                    }
                  ]
                },
                {
                  key: '14',
                  icon:  <VideoCameraOutlined className="fs-4" />,
                  label: 'Form',
                },
                {
                  key: '14',
                  icon:  <VideoCameraOutlined className="fs-4" />,
                  label: 'Settings',
                },
                {
                  key: '14',
                  icon:  <VideoCameraOutlined className="fs-4" />,
                  label: 'LogOut',
                },
              ]
            }
          
            ]}

            
        />
      </Sider>

      
      <Layout className="site-layout">
        <Header 
        className="flex  flex-wrap justify-between items-center p-4"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 56,
              height: 56,
            }}
            />

            <div className="flex gap-4 items-center">
            <Select
                  defaultValue="en"
                  style={{
                    width: 120,
                  }}
                  allowClear
                  options={[
                    {
                      value: 'English',
                      label: 'English',
                    },
                  ]}
                />
                
              
            
                        <div className="flex gap-3 items-center dropdown mx-5">
                          <div>
                            <img
                            src={"https://demo.lead-pro.in/images/user.png"}
                              width={32}
                              height={32}
                              alt=""
                              className='rounded-full'
                            />
                          </div>
                          
                           
                          </div>
                      </div>
            
            
            


          



        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,

          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout1;