import * as React from 'react';
import Box from '@mui/material/Box';
import {
    DataGridPro,
    useGridApiRef,
    gridVisibleColumnDefinitionsSelector,
    gridExpandedSortedRowIdsSelector,
} from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';

export const TablePrivate = () => {
    const apiRef = useGridApiRef();
    
    const [coordinates, setCoordinates] = React.useState({
        rowIndex: 0,
        colIndex: 0,
    });
    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 100,
    });
    console.log(data)
    React.useEffect(() => {
        const { rowIndex, colIndex } = coordinates;
        apiRef.current.scrollToIndexes(coordinates);
        const id = gridExpandedSortedRowIdsSelector(apiRef)[rowIndex];
        const column = gridVisibleColumnDefinitionsSelector(apiRef)[colIndex];
        apiRef.current.setCellFocus(id, column.field);
    }, [apiRef, coordinates]);
    

    const handleCellClick = (params) => {
        const rowIndex = gridExpandedSortedRowIdsSelector(apiRef).findIndex(
            (id) => id === params.id,
        );
        const colIndex = gridVisibleColumnDefinitionsSelector(apiRef).findIndex(
            (column) => column.field === params.field,
        );
        setCoordinates({ rowIndex, colIndex });
    };
    return (
        <Box sx={{ width: '100%' }}>
            
            <Box sx={{ height: 400 }}>
            <DataGridPro
                apiRef={apiRef}
                onCellClick={handleCellClick}
                hideFooter
                {...data}
            />
            </Box>
        </Box>
    );
}

export default TablePrivate;