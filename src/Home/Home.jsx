import { useState } from "react";
import Style from "./Home.module.css";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px', // Fix the typo here
};

function Home() {
    const [user, setUser] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    function addUser() {
        console.log(name, age);
        if (name.trim().length === 0 || age.trim().length === 0) {
            setModalOpen(true);
            return;
        }
        const userDetail = { name, age };
        setUser([...user, userDetail]);
        setName('');
        setAge('');
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <div className={Style.main}>
            <div className={Style.inputFild}>
                <label>User Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Age (Years)</label>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                <button onClick={addUser}>Add User</button>
            </div>
            {
                user.length > 0 ? (
                    <div className={Style.display}>
                        {user.map((i, index) => (
                            <div key={index} >
                                <p>{i.name} ({i.age} years Old)</p>
                            </div>
                        ))}
                    </div>
                ) : ('')
            }

            <Modal open={modalOpen} onClose={closeModal}>
                <Box sx={style}>
                    <h2>Please provide a valid name</h2>
                    <button onClick={closeModal}>Close</button>
                </Box>
            </Modal>
        </div>
    )
}

export default Home;
