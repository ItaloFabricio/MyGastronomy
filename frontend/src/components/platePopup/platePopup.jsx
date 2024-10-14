import { Dialog } from "@mui/material";

export default function PlatePopup  ({ plateData, onClose }) {
    return (
        <Dialog open={true} onClose={onClose}>
            <div>
                <img  src={plateData.imgUrl} alt="" />
                <div >
                    <h2>{plateData.name}</h2>
                    <p>{plateData.description}</p>
                    <p> $ {plateData.price}</p>
                    <button>Add to cart</button>
                </div>
            </div>
        </Dialog>
    )
}