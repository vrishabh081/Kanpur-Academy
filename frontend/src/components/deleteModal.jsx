import "../style/modal.css";

export const DeleteModal = ({deleteStudentRecord})=>{

    // modal functions-
    const modal = ()=>{
        document.querySelector(".overlay").classList.add("showovelay");
        document.querySelector(".modal").classList.add("showmodal");
        // document.querySelector("body").style.backgroundColor="grey"
    }
    const closeModal = ()=>{
        document.querySelector(".overlay").classList.remove("showovelay");
        document.querySelector(".modal").classList.remove("showmodal");
    }

    return(
        <div>
        <ion-icon name="trash-outline" onClick = {modal}></ion-icon>
        <div className="overlay"></div>
        <div className="modal">
        <ion-icon name="close-circle-outline" onClick={closeModal}></ion-icon>
        <div style={{marginTop:"2rem"}}>
            <h2>Delete Student Details</h2>
            <p>Once the student details are deleted, you will not be able to get them back.</p>
            <p style={{fontSize:"1.2rem", fontWeight:"600", marginTop:"1.5rem"}}>Are you sure?</p>
        </div>
        <div id="delete-modal-btn">
            <button className="cancel-btn" onClick={closeModal}>Cancel</button>
            <button className="delete-btn" onClick={()=>deleteStudentRecord()}>Delete</button>
        </div>
        </div>
    </div>
    )
}