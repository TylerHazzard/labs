import ShoutoutModel from "../interfaces/ShoutoutModel";
import { FC } from "react";

interface Props {
    shoutout: ShoutoutModel
}

const Shoutout: FC<Props> = ({ shoutout }) => (
    <div className="shoutout-card">
        <div>To: {shoutout.to}</div>
        <div>From: {shoutout.from}</div>
        <p>{shoutout.text}</p>
    </div>
)

export default Shoutout