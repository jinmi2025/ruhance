import { useState } from 'react';
import './MainTabItem.css';

const MainTabItem = () => {
    const [active, setActive] = useState(0);
    const [selectedType11, setSelectedType11] = useState('');
    const [selectedType12, setSelectedType12] = useState('');
    const [selectedType13, setSelectedType13] = useState('');
    const [selectedType21, setSelectedType21] = useState('');
    const [selectedType22, setSelectedType22] = useState('');

    const handleToggleBtn11 = (e) => {
        setSelectedType11(e.target.value);
    };

    const handleToggleBtn12 = (e) => {
        setSelectedType12(e.target.value);
    };

    const handleToggleBtn13 = (e) => {
        setSelectedType13(e.target.value);
    };

    const handleToggleBtn21 = (e) => {
        setSelectedType21(e.target.value);
    };

    const handleToggleBtn22 = (e) => {
        setSelectedType22(e.target.value);
    };


    return (
        <div className="MainTabItem">
            <h2>내게 꼭 맞는 제품은?</h2>
            <div className='tab-btn'>
                <p className={active == 0 ? 'active' : ''}>
                    <label onClick={() => { setActive(0) }}>
                        <input type='radio' name='main-type' className='hide' value='정수기' />
                        <img src='/img/icon-product-check-visual-1.png' />
                        <span>정수기</span>
                    </label>
                </p>
                <p className={active == 1 ? 'active' : ''}>
                    <label onClick={() => { setActive(1) }}>
                        <input type='radio' name='main-type' className='hide' value='공기청정기' />
                        <img src='/img/icon-product-check-visual-2.png' />
                        <span>공기청정기</span>
                    </label>
                </p>
                <p className={active == 2 ? 'active' : ''}>
                    <label onClick={() => { setActive(2) }}>
                        <input type='radio' name='main-type' className='hide' value='비데' />
                        <img src='/img/icon-product-check-visual-3.png' />
                        <span>비데</span>
                    </label>
                </p>
                <p className={active == 3 ? 'active' : ''}>
                    <label onClick={() => { setActive(3) }}>
                        <input type='radio' name='main-type' className='hide' value='키친&바스' />
                        <img src='/img/icon-product-check-visual-4.png' />
                        <span>키친&amp;바스</span>
                    </label>
                </p>
            </div>
            <div className='tab-content'>
                {active == 0 &&
                    <div className='tab-cont1'>
                        <div className='box'>
                            <div className='cel4'>
                                <p className={selectedType11 == '얼음정수기' ? 'active' : ''}>
                                    <label>
                                        <input type='radio' name='type0101' className='hide' value='얼음정수기' onChange={handleToggleBtn11} checked={selectedType11 == '얼음정수기'} />
                                        얼음정수기
                                    </label>
                                </p>
                                <p className={selectedType11 == '냉온정수기' ? 'active' : ''}>
                                    <label>
                                        <input type='radio' name='type0101' className='hide' value='냉온정수기' onChange={handleToggleBtn11} checked={selectedType11 == '냉온정수기'} />
                                        냉온정수기
                                    </label>
                                </p>
                                <p className={selectedType11 == '냉정수기' ? 'active' : ''}>
                                    <label>
                                        <input type='radio' name='type0101' className='hide' value='냉정수기' onChange={handleToggleBtn11} checked={selectedType11 == '냉정수기'} />
                                        냉정수기
                                    </label>
                                </p>
                                <p className={selectedType11 == '무전원정수기' ? 'active' : ''}>
                                    <label>
                                        <input type='radio' name='type0101' className='hide' value='무전원정수기' onChange={handleToggleBtn11} checked={selectedType11 == '무전원정수기'} />
                                        무전원정수기
                                    </label>
                                </p>
                            </div>
                            <div className='cel2'>
                                <p className={selectedType12 == '가정용' ? 'active' : ''}>
                                    <label>
                                        <input type='radio' name='type0102' className='hide' value='가정용' onChange={handleToggleBtn12} checked={selectedType12 == '가정용'} />
                                        가정용
                                    </label>
                                </p>
                                <p className={selectedType12 == '대용량' ? 'active' : ''}>
                                    <label>
                                        <input type='radio' name='type0102' className='hide' value='대용량' onChange={handleToggleBtn12} checked={selectedType12 == '대용량'} />
                                        대용량
                                    </label>
                                </p>
                            </div>
                            <div className='cel2'>
                                <p className={selectedType13 == '방문관리' ? 'active' : ''}>
                                    <label>
                                        <input type='radio' name='type0103' className='hide' value='방문관리' onChange={handleToggleBtn13} checked={selectedType13 == '방문관리'} />
                                        방문관리
                                    </label>
                                </p>
                                <p className={selectedType13 == '자가관리' ? 'active' : ''}>
                                    <label>
                                        <input type='radio' name='type0103' className='hide' value='자가관리' onChange={handleToggleBtn13} checked={selectedType13 == '자가관리'} />
                                        자가관리
                                    </label>
                                </p>
                            </div>
                        </div>
                        <div className='btnSearch'>
                            <span className='left'></span>
                            <button>
                                <img src='/img/icon-search-white.png' alt='검색하기' />
                                <span>검색하기</span>
                            </button>
                            <span className='right'></span>
                        </div>
                    </div>
                }
                {active == 1 &&
                    <div className='tab-cont2'>
                        <div className='box'>
                            <div className='cel3'>
                                <div className='cel2'>
                                    <p className={selectedType21 == '10평미만' ? 'active' : ''}>
                                        <label>
                                            <input type='radio' name='type0201' className='hide' value='10평미만' onChange={handleToggleBtn21} checked={selectedType21 == '10평미만'} />
                                            10평 미만
                                        </label>
                                    </p>
                                    <p className={selectedType21 == '1020평' ? 'active' : ''}>
                                        <label>
                                            <input type='radio' name='type0201' className='hide' value='1020평' onChange={handleToggleBtn21} checked={selectedType21 == '1020평'} />
                                            10~20평
                                        </label>
                                    </p>
                                </div>
                                <div className='cel1'>
                                    <p className={selectedType21 == '2030평' ? 'active' : ''}>
                                        <label>
                                            <input type='radio' name='type0201' className='hide' value='2030평' onChange={handleToggleBtn21} checked={selectedType21 == '2030평'} />
                                            20~30평 이상
                                        </label>
                                    </p>
                                </div>
                            </div>
                            <div className='cel2'>
                                <p className={selectedType22 == '방문관리' ? 'active' : ''}>
                                    <label>
                                        <input type='radio' name='type0202' className='hide' value='방문관리' onChange={handleToggleBtn22} checked={selectedType22 == '방문관리'} />
                                        방문관리
                                    </label>
                                </p>
                                <p className={selectedType22 == '자가관리' ? 'active' : ''}>
                                    <label>
                                        <input type='radio' name='type0202' className='hide' value='자가관리' onChange={handleToggleBtn22} checked={selectedType22 == '자가관리'} />
                                        자가관리
                                    </label>
                                </p>
                            </div>
                        </div>
                        <div className='btnSearch'>
                            <span className='left'></span>
                            <button>
                                <img src='/img/icon-search-white.png' alt='검색하기' />
                                <span>검색하기</span>
                            </button>
                            <span className='right'></span>
                        </div>
                    </div>
                }
                {active == 2 && <div className='tab-cont3'>3번탭내용</div>}
                {active == 3 && <div className='tab-cont4'>4번탭내용</div>}
            </div>
        </div>
    )
}

export default MainTabItem;