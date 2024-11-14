import { Card, Flex, Typography, Image } from "antd";
import plant from '../assets/plant.jfif';

export default function ContentSidebar () {
    return (
        <div>
            <Card className="card">
                <Flex vertical gap="large">
                    <Typography.Title level={4} strong>
                        Today <br/>
                        5 orders
                    </Typography.Title>
                    <Typography.Title level={4} strong>
                        This Month <br/>
                        240 orders
                    </Typography.Title>
                </Flex>

                <Image
                 src={plant}
                  alt="plant"
                   style={{position:"absolute",
                     bottom: -30,
                      left: 160,
                    height: '256px',
                     width: 'auto'
                }}/>
            </Card>
        </div>
    );
}