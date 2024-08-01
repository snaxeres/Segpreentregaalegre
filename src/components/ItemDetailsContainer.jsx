import { useEffect, useState } from "react"
import data from "../data/data.json"
import { useParams } from "react-router-dom"
import { Card } from "react-bootstrap"


export const ItemDetailsContainer = () => {
    const [seed, setSeed] = useState([])

    const { id } = useParams()

    useEffect(() => {
        const myPromise = new Promise((res, rej) =>
            setTimeout(() => res(data), 2000))

        myPromise
            .then((response) => {
                const seedDetail = response.find(i => i.id === Number(id))
                setSeed(seedDetail)
            })

    }, [id])


    return (
            <Card style={{ width: "18rem", padding: "1rem" }}>
                <Card.Img
                    variant="top"
                    src={seed.pictureUrl}
                />
                <Card.Body>
                    <Card.Title>
                        {seed.title}
                    </Card.Title>
                    <Card.Text>Genetica: {seed.category}</Card.Text>
                    <Card.Text>Precio: {seed.price}</Card.Text>
                    <Card.Text>Descripcion: {seed.detail}</Card.Text>
                </Card.Body>
            </Card>
    )
}