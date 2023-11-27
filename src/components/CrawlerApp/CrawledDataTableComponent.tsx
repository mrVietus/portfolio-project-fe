import { Table } from "flowbite-react"
import { StringKeyNumberValueDictionary } from "../../interfaces/Responses/PageDataResponse";

type Props = {
    topWords: StringKeyNumberValueDictionary[];
}

function CrawledDataTableComponent({topWords}: Props) {
    if(topWords === undefined || topWords.length == 0) {
        return <></>
    }

    return (
        <Table hoverable>
            <Table.Head>
                <Table.HeadCell>Word</Table.HeadCell>
                <Table.HeadCell>word Count</Table.HeadCell>
            </Table.Head>
            <Table.Body className='divide-y'>
                {
                Object.keys(topWords).map((key) => (
                        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                            <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                                {key}
                            </Table.Cell>
                            <Table.Cell>{topWords[key]}</Table.Cell>
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Table>
    )
  }

export default CrawledDataTableComponent;