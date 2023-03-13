import React from "react";
import { EditOutlined, EllipsisOutlined, SettingOutlined ,MoreOutlined} from '@ant-design/icons';
import { Descriptions , Badge, Typography} from 'antd';

import '../assets/scss/pages/BoardView.scss';

const { Title, Paragraph } = Typography;

function BoardView(props) {
    return (
        <div className="boardView">
            <Title>BoardView</Title>
        </div>
    );
}

export default BoardView;
