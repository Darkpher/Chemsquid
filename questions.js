// ChemSquid Questions Database
// Organized by rounds with increasing difficulty

const QUESTIONS = {
    // Round 1: "Red Light Green Light" - Speed Questions (15 seconds)
    round1: [
        {
            question: "ธาตุใดอยู่ในหมู่ 1A?",
            options: ["Na", "Cl", "C", "He"],
            correct: 0,
            explanation: "โซเดียม (Na) อยู่ในหมู่ 1A - โลหะอัลคาไล"
        },
        {
            question: "สัญลักษณ์ของคาร์บอนคืออะไร?",
            options: ["Ca", "C", "Co", "Cr"],
            correct: 1,
            explanation: "สัญลักษณ์ของคาร์บอนคือ C"
        },
        {
            question: "ธาตุใดมีสัญลักษณ์ 'O'?",
            options: ["ออสเมียม", "ออกซิเจน", "ออแกเนสซอน", "ออสเมียม"],
            correct: 1,
            explanation: "O คือสัญลักษณ์ของออกซิเจน"
        },
        {
            question: "เลขอะตอมของไฮโดรเจนคืออะไร?",
            options: ["1", "2", "3", "4"],
            correct: 0,
            explanation: "ไฮโดรเจนมีเลขอะตอม 1"
        },
        {
            question: "ธาตุใดเป็นแก๊สเฉื่อย?",
            options: ["He", "H", "Li", "Be"],
            correct: 0,
            explanation: "ฮีเลียม (He) เป็นแก๊สเฉื่อย"
        },
        {
            question: "สัญลักษณ์ของเหล็กคืออะไร?",
            options: ["Ir", "Fe", "In", "I"],
            correct: 1,
            explanation: "สัญลักษณ์ของเหล็กคือ Fe (มาจากภาษาละติน 'ferrum')"
        },
        {
            question: "ธาตุใดอยู่ในหมู่ 18?",
            options: ["นีออน", "อาร์กอน", "คริปทอน", "ทั้งหมดนี้"],
            correct: 3,
            explanation: "ทั้งหมดเป็นแก๊สเฉื่อยในหมู่ 18"
        },
        {
            question: "สัญลักษณ์ของทองคืออะไร?",
            options: ["Ag", "Au", "Fe", "Hg"],
            correct: 1,
            explanation: "สัญลักษณ์ของทองคือ Au (มาจากภาษาละติน 'aurum')"
        },
        {
            question: "ธาตุใดมีโปรตอน 6 ตัว?",
            options: ["คาร์บอน", "ไนโตรเจน", "ออกซิเจน", "ฟลูออรีน"],
            correct: 0,
            explanation: "คาร์บอนมีโปรตอน 6 ตัว (เลขอะตอม 6)"
        },
        {
            question: "ธาตุใดมีมากที่สุดในจักรวาล?",
            options: ["ฮีเลียม", "ไฮโดรเจน", "ออกซิเจน", "คาร์บอน"],
            correct: 1,
            explanation: "ไฮโดรเจนเป็นธาตุที่มีมากที่สุดในจักรวาล"
        },
        {
            question: "ธาตุใดเป็นฮาโลเจน?",
            options: ["นีออน", "คลอรีน", "อาร์กอน", "คริปทอน"],
            correct: 1,
            explanation: "คลอรีนเป็นฮาโลเจนในหมู่ 17"
        },
        {
            question: "สัญลักษณ์ของเงินคืออะไร?",
            options: ["Si", "Ag", "Sr", "Au"],
            correct: 1,
            explanation: "สัญลักษณ์ของเงินคือ Ag (มาจากภาษาละติน 'argentum')"
        },
        {
            question: "ธาตุใดเป็นโลหะ?",
            options: ["คาร์บอน", "ไนโตรเจน", "โซเดียม", "คลอรีน"],
            correct: 2,
            explanation: "โซเดียมเป็นโลหะในหมู่ 1A"
        },
        {
            question: "เลขอะตอมของฮีเลียมคืออะไร?",
            options: ["1", "2", "3", "4"],
            correct: 1,
            explanation: "ฮีเลียมมีเลขอะตอม 2"
        },
        {
            question: "ธาตุใดอยู่ในหมู่ 2A?",
            options: ["Li", "Be", "B", "C"],
            correct: 1,
            explanation: "เบริลเลียม (Be) อยู่ในหมู่ 2A"
        },
        {
            question: "สัญลักษณ์ของทองแดงคืออะไร?",
            options: ["Co", "Cu", "Cp", "Cr"],
            correct: 1,
            explanation: "สัญลักษณ์ของทองแดงคือ Cu (มาจากภาษาละติน 'cuprum')"
        },
        {
            question: "ธาตุใดเป็นแก๊สที่อุณหภูมิห้อง?",
            options: ["ปรอท", "โบรมีน", "ไนโตรเจน", "ไอโอดีน"],
            correct: 2,
            explanation: "ไนโตรเจนเป็นแก๊สที่อุณหภูมิห้อง"
        },
        {
            question: "สัญลักษณ์ของตะกั่วคืออะไร?",
            options: ["Ld", "Pb", "Le", "Pl"],
            correct: 1,
            explanation: "สัญลักษณ์ของตะกั่วคือ Pb (มาจากภาษาละติน 'plumbum')"
        },
        {
            question: "ธาตุใดมีสัญลักษณ์ 'N'?",
            options: ["นีออน", "ไนโตรเจน", "นิกเกิล", "โซเดียม"],
            correct: 1,
            explanation: "N คือสัญลักษณ์ของไนโตรเจน"
        },
        {
            question: "เลขอะตอมของลิเทียมคืออะไร?",
            options: ["2", "3", "4", "5"],
            correct: 1,
            explanation: "ลิเทียมมีเลขอะตอม 3"
        }
    ],

    // Round 2: "Sugar Honeycomb" - Element Symbols and Names
    round2: [
        {
            question: "สัญลักษณ์ของทองคืออะไร?",
            options: ["Ag", "Au", "Fe", "Hg"],
            correct: 1,
            explanation: "สัญลักษณ์ของทองคือ Au (มาจากภาษาละติน 'aurum')"
        },
        {
            question: "ธาตุ H คืออะไร?",
            options: ["ไฮโดรเจน", "ฮีเลียม", "แฮฟเนียม", "โฮลเมียม"],
            correct: 0,
            explanation: "H คือสัญลักษณ์ของไฮโดรเจน"
        },
        {
            question: "สัญลักษณ์ของเงินคืออะไร?",
            options: ["Si", "Ag", "Sr", "Au"],
            correct: 1,
            explanation: "สัญลักษณ์ของเงินคือ Ag (มาจากภาษาละติน 'argentum')"
        },
        {
            question: "ธาตุ Fe คืออะไร?",
            options: ["ฟลูออรีน", "เหล็ก", "แฟรนเซียม", "เฟอร์เมียม"],
            correct: 1,
            explanation: "Fe คือสัญลักษณ์ของเหล็ก"
        },
        {
            question: "สัญลักษณ์ของทองแดงคืออะไร?",
            options: ["Co", "Cu", "Cp", "Cr"],
            correct: 1,
            explanation: "สัญลักษณ์ของทองแดงคือ Cu (มาจากภาษาละติน 'cuprum')"
        },
        {
            question: "ธาตุ Pb คืออะไร?",
            options: ["แพลทินัม", "ตะกั่ว", "ฟอสฟอรัส", "โพโลเนียม"],
            correct: 1,
            explanation: "Pb คือสัญลักษณ์ของตะกั่ว"
        },
        {
            question: "สัญลักษณ์ของปรอทคืออะไร?",
            options: ["Me", "Hg", "Mr", "Mc"],
            correct: 1,
            explanation: "สัญลักษณ์ของปรอทคือ Hg (มาจากภาษาละติน 'hydrargyrum')"
        },
        {
            question: "ธาตุ Sn คืออะไร?",
            options: ["กำมะถัน", "ดีบุก", "สตรอนเทียม", "ซีลีเนียม"],
            correct: 1,
            explanation: "Sn คือสัญลักษณ์ของดีบุก"
        },
        {
            question: "สัญลักษณ์ของทังสเตนคืออะไร?",
            options: ["Tu", "Tn", "W", "Ta"],
            correct: 2,
            explanation: "สัญลักษณ์ของทังสเตนคือ W (มาจากภาษาเยอรมัน 'Wolfram')"
        },
        {
            question: "ธาตุ Na คืออะไร?",
            options: ["นีออน", "ไนโตรเจน", "โซเดียม", "นิกเกิล"],
            correct: 2,
            explanation: "Na คือสัญลักษณ์ของโซเดียม"
        },
        {
            question: "สัญลักษณ์ของโพแทสเซียมคืออะไร?",
            options: ["P", "Pt", "K", "Po"],
            correct: 2,
            explanation: "สัญลักษณ์ของโพแทสเซียมคือ K (มาจากภาษาละติน 'kalium')"
        },
        {
            question: "ธาตุ K คืออะไร?",
            options: ["คริปทอน", "โพแทสเซียม", "คริปทอน", "คริปทอน"],
            correct: 1,
            explanation: "K คือสัญลักษณ์ของโพแทสเซียม"
        },
        {
            question: "สัญลักษณ์ของพลวงคืออะไร?",
            options: ["An", "At", "Sb", "Am"],
            correct: 2,
            explanation: "สัญลักษณ์ของพลวงคือ Sb (มาจากภาษาละติน 'stibium')"
        },
        {
            question: "ธาตุ Sb คืออะไร?",
            options: ["กำมะถัน", "พลวง", "ซีลีเนียม", "สตรอนเทียม"],
            correct: 1,
            explanation: "Sb คือสัญลักษณ์ของพลวง"
        },
        {
            question: "สัญลักษณ์ของบิสมัทคืออะไร?",
            options: ["Bi", "Bm", "Bs", "Bt"],
            correct: 0,
            explanation: "สัญลักษณ์ของบิสมัทคือ Bi"
        }
    ],

    // Round 3: "Glass Bridge" - A/B Choice Path
    round3: [
        {
            question: "ข้อใดเป็นแก๊สเฉื่อย?",
            options: ["He", "O2"],
            correct: 0,
            explanation: "ฮีเลียม (He) เป็นแก๊สเฉื่อย"
        },
        {
            question: "ข้อใดเป็นโลหะ?",
            options: ["Cl", "Na"],
            correct: 1,
            explanation: "โซเดียม (Na) เป็นโลหะ"
        },
        {
            question: "ข้อใดเป็นแก๊สที่อุณหภูมิห้อง?",
            options: ["Hg", "N2"],
            correct: 1,
            explanation: "ไนโตรเจน (N2) เป็นแก๊สที่อุณหภูมิห้อง"
        },
        {
            question: "ข้อใดเป็นฮาโลเจน?",
            options: ["Ne", "F"],
            correct: 1,
            explanation: "ฟลูออรีน (F) เป็นฮาโลเจน"
        },
        {
            question: "ข้อใดเป็นของเหลวที่อุณหภูมิห้อง?",
            options: ["Br", "Fe"],
            correct: 0,
            explanation: "โบรมีน (Br) เป็นของเหลวที่อุณหภูมิห้อง"
        },
        {
            question: "ข้อใดเป็นโลหะอัลคาไล?",
            options: ["Ca", "Li"],
            correct: 1,
            explanation: "ลิเทียม (Li) เป็นโลหะอัลคาไล"
        },
        {
            question: "ข้อใดเป็นโลหะทรานซิชัน?",
            options: ["Cu", "C"],
            correct: 0,
            explanation: "ทองแดง (Cu) เป็นโลหะทรานซิชัน"
        },
        {
            question: "ข้อใดเป็นอโลหะ?",
            options: ["S", "Si"],
            correct: 0,
            explanation: "กำมะถัน (S) เป็นอโลหะ"
        },
        {
            question: "ข้อใดเป็นเมทัลลอยด์?",
            options: ["B", "Be"],
            correct: 0,
            explanation: "โบรอน (B) เป็นเมทัลลอยด์"
        },
        {
            question: "ข้อใดเป็นแลนทาไนด์?",
            options: ["La", "Li"],
            correct: 0,
            explanation: "แลนทานัม (La) เป็นแลนทาไนด์"
        }
    ],

    // Round 4: "Final Survival" - Advanced Questions
    round4: [
        {
            question: "ธาตุใดมีเวเลนซ์อิเล็กตรอน 6 ตัว?",
            options: ["O", "C", "F", "Cl"],
            correct: 0,
            explanation: "ออกซิเจน (O) มีเวเลนซ์อิเล็กตรอน 6 ตัว"
        },
        {
            question: "เลขอะตอมของเหล็กคืออะไร?",
            options: ["24", "26", "28", "30"],
            correct: 1,
            explanation: "เหล็กมีเลขอะตอม 26"
        },
        {
            question: "ธาตุใดมีอิเล็กโตรเนกาติวิตีสูงที่สุด?",
            options: ["F", "O", "N", "Cl"],
            correct: 0,
            explanation: "ฟลูออรีน (F) มีอิเล็กโตรเนกาติวิตีสูงที่สุด"
        },
        {
            question: "การจัดเรียงอิเล็กตรอนของนีออนคืออะไร?",
            options: ["1s²2s²2p⁶", "1s²2s²2p⁴", "1s²2s²2p⁵", "1s²2s²2p³"],
            correct: 0,
            explanation: "นีออนมีการจัดเรียงอิเล็กตรอน 1s²2s²2p⁶"
        },
        {
            question: "ธาตุใดมีรัศมีอะตอมใหญ่ที่สุด?",
            options: ["Li", "Na", "K", "Rb"],
            correct: 3,
            explanation: "รูบิเดียม (Rb) มีรัศมีอะตอมใหญ่ที่สุด"
        },
        {
            question: "สถานะออกซิเดชันของออกซิเจนใน H₂O คืออะไร?",
            options: ["-2", "-1", "0", "+1"],
            correct: 0,
            explanation: "ออกซิเจนมีสถานะออกซิเดชัน -2 ใน H₂O"
        },
        {
            question: "ธาตุใดเป็นแก๊สเฉื่อย?",
            options: ["Ar", "Al", "As", "Ag"],
            correct: 0,
            explanation: "อาร์กอน (Ar) เป็นแก๊สเฉื่อย"
        },
        {
            question: "มวลอะตอมของคาร์บอน-12 คืออะไร?",
            options: ["6", "12", "14", "16"],
            correct: 1,
            explanation: "คาร์บอน-12 มีมวลอะตอม 12"
        },
        {
            question: "ธาตุใดมีจุดหลอมเหลวสูงที่สุด?",
            options: ["Fe", "W", "Ta", "Re"],
            correct: 1,
            explanation: "ทังสเตน (W) มีจุดหลอมเหลวสูงที่สุด"
        },
        {
            question: "หมู่ของฮาโลเจนคือหมู่ที่เท่าไร?",
            options: ["15", "16", "17", "18"],
            correct: 2,
            explanation: "ฮาโลเจนอยู่ในหมู่ 17"
        }
    ]
};

// Round configurations
const ROUND_CONFIG = {
    round1: {
        name: "Red Light Green Light",
        timeLimit: 20,
        questionsPerRound: 4,
        description: "Answer within 20 seconds or you're eliminated!"
    },
    round2: {
        name: "Sugar Honeycomb",
        timeLimit: 20,
        questionsPerRound: 4,
        description: "Choose a container and answer the question!"
    },
    round3: {
        name: "Glass Bridge",
        timeLimit: 20,
        questionsPerRound: 4,
        description: "Choose your path carefully..."
    },
    round4: {
        name: "Final Survival",
        timeLimit: 20,
        questionsPerRound: 4,
        description: "The hardest chemistry questions await!"
    }
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QUESTIONS, ROUND_CONFIG };
} 