import { FC } from "react";
import Shoutout from "./Shoutout";
import ShoutoutModel from "../interfaces/ShoutoutModel";

interface Props {
    shoutouts: ShoutoutModel[]
}

const ShoutoutList: FC<Props> = ({ shoutouts }) => (
    <div>
        {shoutouts.map(shoutout => (
            <Shoutout key={shoutout._id} shoutout={shoutout} />
        ))}
    </div>
)

export default ShoutoutList