import { Spin } from 'antd';

export default function RefreshLoading() {
  return (
    <article className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center">
      <div className="scale-[2]">
        <Spin size="large" />
      </div>
    </article>
  );
}
