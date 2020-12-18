import SearchMovie from '../../components/movie/search';
import ListMovie from '../../components/movie/list';
import Head from 'next/head';
import HeaderTags from '../../components/header';

export default function Movies(){
    return(
        <>
            <HeaderTags title="Search Movie" />
            <SearchMovie/>
            <ListMovie/>
        </>
    )
}