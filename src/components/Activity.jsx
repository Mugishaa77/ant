import { Flex, Typography, Button, List, Avatar } from "antd";

const data = [
    {name: 'Sally Wanga',
        orderTime: 1,
    },
    {name: 'Janice Wanjiku',
        orderTime: 1,
    },
    {name: 'Valary Moth',
        orderTime: 1,
    },
    {name: 'Eve Mboza',
        orderTime: 2,
    },
    {name: 'Hawa Mugisha',
        orderTime: 2,
    },
];
export default function Activity () {
 return (
    <div>
        <Flex vertical gap="small">
            <Flex align="center" justify="space-between" gap="large">
                <Typography.Title level={3} strong className="primary--color">
                    Recent Activity
                </Typography.Title>
                <Button type="link" className="gray--color">
                 View All
            </Button>

            </Flex>

            <List
             pagination 
             dataSource={data}
             renderItem={(user,index) => (
                <List.Item>
                    <List.Item.Meta
                     avatar = {<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}/>}
                      title={<a href="#">{user.name}</a>}
                      description="Ordered a New Plant">
                    {user.data}
                    </List.Item.Meta>
                    <span className="gray--color">
                        {user.orderTime} {user.orderTime == 1 ? 'day ago' : 'days ago'}
                    </span>
                </List.Item>
             )}/>

        </Flex>
    </div>
 );
}