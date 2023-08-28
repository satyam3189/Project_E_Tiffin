export default function AddressInfo({user}) {
    return (
        <center>
            <div className={'InfoTitle'}>
                <h2>{user.role.name+" INFO"}</h2>
            </div>
            <div className={'InfoContainer'}>
                <div className={'ModalElementValUser'}>
                    {"Name:"}
                </div>
                <div className={'ModalElementValAddress'}>
                    {user.firstName + " " + user.lastName}
                </div>
            </div>
            <div className={'InfoContainer'}>
                <div className={'ModalElementValUser'}>
                    {"Mob:"}
                </div>
                <div className={'ModalElementValAddress'}>
                    {user.mob}
                </div>
            </div>
            <div className={'InfoContainer'}>
                <div className={'ModalElementValUser'}>
                    {"DOB:"}
                </div>
                <div className={'ModalElementValAddress'}>
                    {user.dob}
                </div>
            </div>
            <div className={'InfoContainer'}>
                <div className={'ModalElementValUser'}>
                    {"FlatNo:"}
                </div>
                <div className={'ModalElementValAddress'}>
                    {user.address.flatNo}
                </div>
            </div>
            <div className={'InfoContainer'}>
                <div className={'ModalElementValUser'}>
                    {"Street:"}
                </div>
                <div className={'ModalElementValAddress'}>
                    {user.address.street}
                </div>
            </div>
            <div className={'InfoContainer'}>
                <div className={'ModalElementValUser'}>
                    {"Landmark:"}
                </div>
                <div className={'ModalElementValAddress'}>
                    {user.address.landmark}
                </div>
            </div>
            <div className={'InfoContainer'}>
                <div className={'ModalElementValUser'}>
                    {"City:"}
                </div>
                <div className={'ModalElementValAddress'}>
                    {user.address.city}
                </div>
            </div>
            <div className={'InfoContainer'}>
                <div className={'ModalElementValUser'}>
                    {"Pin:"}
                </div>
                <div className={'ModalElementValAddress'}>
                    {user.address.pincode}
                </div>
            </div>
        </center>
    )
}