import Drift from "react-driftjs"
const appId = process.env.DRIFT_APP_ID

export default function DriftWidget() {
  return (
    <><Drift appId={appId}/></>
  )
}