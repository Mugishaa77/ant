import { Button, Card, Flex, Typography, Image } from "antd";
import PlantData from "../PlantData";

const {Meta} = Card;
export default function ProductLists () {
    return (
        <div>
            <Flex align="center" justify="space-between">
            <Typography.Title level={3} strong className="primary--color">
                My Listing
            </Typography.Title>
            <Button type="link" className="gray--color">
                 View All
            </Button>
        </Flex>
        <Flex align="center" gap="large">
            {PlantData.map((plant) => (
                <Card key={plant.id} hoverable className="plant-card">
                    <Image src={plant.picture} style={{width:'130px', marginBottom: '2px'}}/>
                    <Meta title={plant.name} style={{marginBottom:'1rem', paddingTop: '2px'}}/>

                    
                </Card>
            ))}

        </Flex>
             </div>
        
    
    );
}