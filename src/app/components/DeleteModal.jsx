import Image from 'next/image'
export default function DeleteModal({ show, onSubmit, onClose }) {
    return (
        <dialog open={show} className="back-dialog full_width">
            <div className="card flex_column dialogItem">
                <div className="filmMetadata flex_column">
                    <div className="ticketTitle">Удаление билета</div>
                    <div className="description">
                        Вы уверены, что хотите удалить билет?
                    </div>
                </div>
                <div className="buttons dflex">
                    <button className="redButton" onClick={onSubmit}>
                        Да
                    </button>
                    <button className="whiteButton" onClick={onClose}>
                        Нет
                    </button>
                </div>
                <button onClick={onClose} className="counterButton">
                    <Image
                        alt="close"
                        src="/images/x.svg"
                        width={20}
                        height={20}
                    />
                </button>
            </div>
        </dialog>
    )
}
