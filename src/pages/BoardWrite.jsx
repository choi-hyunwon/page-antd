import React from "react";
import { EditOutlined, EllipsisOutlined, SettingOutlined ,MoreOutlined} from '@ant-design/icons';
import { Descriptions , Badge, Typography} from 'antd';

import '../assets/scss/pages/BoardWrite.scss';

const { Title, Paragraph } = Typography;

function BoardWrite(props) {
    return (
        <div className="boardWrite">
            <Title>BoardWrite</Title>
        </div>
    );
}

export default BoardWrite;
