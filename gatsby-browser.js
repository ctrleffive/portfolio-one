import './src/assets/css/bootstrap.css'
import './src/assets/css/base.css'

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Website has been updated. Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
