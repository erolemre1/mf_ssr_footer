function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `${statusCode} - Sunucu bir hata döndürdü`
        : 'Bir hata oluştu'}
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res?.statusCode || err?.statusCode || 404;
  return { statusCode };
};

export default Error;
