interface PageProps {
    params: Promise<{bar:string}>
}

export default async function Bar ({params}:PageProps) {

    const {bar} = await params
    return(
        <div>
            This is being rendered. Here's props: {bar}
        </div>
        )
}