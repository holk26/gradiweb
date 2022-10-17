
const Loading = ({message}) => {
    return(
        <div className="flex item-center justify-center  h-full items-center">
            <p>Espere</p>
            <p className="mt-12">{ message }</p>
        </div>
    );

}

export default Loading;