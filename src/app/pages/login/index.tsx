import * as React from 'react';
import {
  MessageFilled,
  GithubFilled,
  GoogleCircleFilled,
} from '@ant-design/icons';
import { Button, Space, Typography } from 'antd';
import CoverImage from '../../../assets/images/illustration.svg';

export default function Login() {
  return (
    <section className="section-login">
      <div className="section-wrapper">
        <div className="section-header">
          <div className="container">
            <div className="flex-center-y justify-between">
              <Space size={16}>
                <Typography.Link href="/">
                  <MessageFilled className="icon icon-message" />
                </Typography.Link>
                <Typography.Title
                  className="app-name m-0"
                  level={2}
                >
                  Messclone
                </Typography.Title>
              </Space>
              <Typography.Link
                href="https://github.com/hieuvovan"
                target="_blank"
              >
                <GithubFilled className="icon icon-github" />
              </Typography.Link>
            </div>
          </div>
        </div>
        <div className="section-body">
          <div className="container">
            <div className="flex-center-y justify-between">
              <div className="section-banner">
                <img
                  src={CoverImage}
                  alt="Message banner"
                />
              </div>
              <div className="section-content">
                <Typography.Title
                  className="text-white"
                  level={1}
                >
                  The best place for messaging
                </Typography.Title>
                <Typography.Paragraph className="text-content text-white">
                  It's free, fast and secure. We make it easy and fun to stay
                  close to your favourite people.
                </Typography.Paragraph>
                <Button
                  className="button-login"
                  icon={<GoogleCircleFilled />}
                  size="large"
                >
                  Sign in with Google
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
