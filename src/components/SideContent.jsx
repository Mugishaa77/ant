import {Flex} from 'antd';
import ContentSidebar from './ContentSidebar';


export default function SideContent () {
    return (
    <div>
        <Flex vertical gap="2.3rem"  style={{width:350}}>
            <ContentSidebar/>           
        </Flex>

    </div>);
}