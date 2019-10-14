import React from 'react';
import { Result, Button } from 'antd';

function ServerError() {
    return (
        <Result
            status="500"
            title="500"
            subTitle="Sorry, the server is wrong."
            extra={
                <Button type="primary">
                    <Link to='/'>Back Home</Link>
                </Button>
            }
        />
    )
}

export default ServerError;