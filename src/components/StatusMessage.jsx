function StatusMessage({ variant, title, children }) {

  let className = 'status'

  if (variant) {
    className = 'status status-' + variant
  }

  return (
    <div className={className}>

      {variant === 'loading' && (
        <div className="spinner-border text-primary" role="status"></div>
      )}

      <h2>{title}</h2>

      {children && (
        <p>{children}</p>
      )}

    </div>
  )
}

export default StatusMessage