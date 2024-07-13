export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center px-5">
      <h1 className="mb-5 rounded-lg bg-primaryBlack p-5 text-[50px] text-primaryWhite">
        404
      </h1>
      <h3 className="mb-4 text-title1">페이지를 찾을 수 없습니다.</h3>
      <p className="mb-8 text-center text-body1 leading-7 text-gray-600">
        요청하신 페이지가 존재하지 않거나, 변경되었을 수 있습니다. <br />
        URL이 올바른지 확인해 주세요.
      </p>
    </div>
  );
}
