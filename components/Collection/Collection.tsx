import Link from 'next/link'
import CollectionType from '../../types/collection'
import styles from './Collection.module.css'
import Image from 'next/image'

type CollectionProps = {
    collection: CollectionType
}

const SearchItem = ({ collection }: CollectionProps) => {

    return (
        <Link href={`/manifest/${collection.id}`} >
            <div className={styles.card}>
                <div className={styles.grid}>
                    <Image className={styles.thumbnail} src={collection.thumbnail} alt="" width={400} height={200} />
                    <h2>{collection.journal}{collection.volume}</h2>
                    <p>{collection.pages} pages</p>
                </div>
            </div>
        </Link>
    )
}

export default SearchItem