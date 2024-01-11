import {useEffect, useState} from "react";
import {Box, Button} from "@mui/material";
import MediaCard from "../../components/Card/Card.jsx";
import TextFieldNew from "../../components/TextField/TextField.jsx";
import instance from "../../services/AxiosOrder/Instance.jsx";

export default function Axios() {

    const [data, setData] = useState([]);

    const [userid, setUserID] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');


    useEffect(() => {

        return () => getData();
    }, []);

    const getData = () => {
        instance.get('/posts')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setData(response.data)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });


    }

    const postData = () => {
        console.log(title,userid,body)


        instance.post('/posts', {
            title: title,
            body: body,
            userId: userid,


        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const updateData = () => {
        instance.put('/posts/1', {
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1,

        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const deleteData = () => {
        instance.delete('/posts/1', {
            method: 'DELETE',

        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <>
            <h1>Axios</h1>
            <Box sx={{
                padding: '100px',
                marginRight: '150px',
                border: 1
            }}>
                <h2>Add Post</h2>
                <TextFieldNew
                    fullWidth name={'ID'}
                    onChange={(e) => setUserID(e.target.value)}
                    value={userid}
                />
                <br/>
                <TextFieldNew name={'Title'}
                              onChange={(e) => setTitle(e.target.value)}
                              value={title}
                />
                <br/>
                <TextFieldNew name={'Description'}

                              onChange={(e) => setBody(e.target.value)}
                              value={body}/>
                <br/>


                <Button variant="contained" onClick={() => postData()}>
                    Post
                </Button>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-around'}}>


                <Button color="secondary" onClick={() => updateData()}>Update</Button>

                <Button variant="outlined"  onClick={() => deleteData()}>
                    Delete
                </Button>

                <Button variant="contained" color="success" onClick={() => getData()}>
                    View
                </Button>
            </Box>
            <br/><br/>

            <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>

                {data.map((val) => (
                    <MediaCard key={val.id} id={val.id} title={val.title} body={val.body}/>
                    //initialize API names
                ))}


            </Box>


        </>
    )
}