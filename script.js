// 測驗題目資料
const quizData = [
    {
        id: 1,
        category: "Java 資料類型",
        question: "以下哪些是有效的 String 宣告方式？",
        code: null,
        options: [
            "String name = null;",
            "var name = \"Brian\";",
            "String name = new String(\"Brian\");",
            "String name = Brian;"
        ],
        correctAnswers: [0, 1, 2],
        explanation: "String 可以被宣告為 null，也可以使用 var 關鍵字搭配字串字面值，或使用 new String() 建構子。但不能直接使用未加引號的識別符。"
    },
    {
        id: 2,
        category: "Java 資料類型",
        question: "哪段程式碼可以將字串轉換為 Boolean 物件？",
        code: "String isCorporateCustomer = \"false\";",
        options: [
            "Boolean.getBoolean(isCorporateCustomer);",
            "Boolean.valueOf(isCorporateCustomer);",
            "Boolean.parseBoolean(isCorporateCustomer);",
            "Object.parseBoolean(isCorporateCustomer);"
        ],
        correctAnswers: [1],
        explanation: "Boolean.valueOf(String) 方法可以將字串轉換為 Boolean 物件。Boolean.parseBoolean() 會回傳基本型別 boolean，而不是 Boolean 物件。Boolean.getBoolean() 是用來從系統屬性中獲取 boolean 值的。"
    },
    {
        id: 3,
        category: "Java 資料類型",
        question: "關於 equals 方法，以下哪些敘述是正確的？",
        code: null,
        options: [
            "equals 方法檢查參考相等性",
            "\"==\" 運算子會呼叫 equals 方法來檢查物件相等性",
            "equals 方法定義在 Object 類別中",
            "equals 方法無法被覆寫"
        ],
        correctAnswers: [2],
        explanation: "Object 類別中定義了 equals 方法，但預設實作是檢查參考相等性（與 == 相同）。子類別通常會覆寫此方法來提供自訂的相等性檢查。== 運算子不會呼叫 equals 方法。"
    },
    {
        id: 4,
        category: "Java 資料類型",
        question: "以下程式碼的執行結果是什麼？",
        code: "var arr1 = new int[]{};\nString[] arr2 = new String[]{};\n\nif(arr1 instanceof Object)\n    System.out.println(\"Inside\");",
        options: [
            "程式碼無法編譯",
            "會拋出 ClassCastException",
            "編譯無誤並印出 \"Inside\"",
            "編譯無誤但不會印出任何內容"
        ],
        correctAnswers: [2],
        explanation: "在 Java 中，所有陣列都是 Object 的子類型，包括基本型別陣列。因此 arr1 instanceof Object 會回傳 true，程式會印出 \"Inside\"。"
    },
    {
        id: 5,
        category: "Java 資料類型",
        question: "以下程式碼中，pageContent 的容量是多少？",
        code: "var cs = \"1234567890\";\nvar pageContent = new StringBuilder(cs);",
        options: [
            "16",
            "10",
            "26",
            "9"
        ],
        correctAnswers: [2],
        explanation: "當使用字串建立 StringBuilder 時，其容量為字串長度加上 16。因此容量為 10 + 16 = 26。"
    },
    {
        id: 6,
        category: "Java 物件導向",
        question: "關於以下程式碼，哪些敘述是正確的？",
        code: "class A {}\nclass B extends A {}\nclass MyExamCloud{\n  public static void main(String []args){\n    A aa = new B();\n    A bb = new B();\n    A aaa = new A();\n  }\n}",
        options: [
            "變數 aa 的物件類型是 B",
            "變數 bb 的參考類型是 B",
            "變數 aaa 的物件類型是 A",
            "以上都不正確"
        ],
        correctAnswers: [0, 2],
        explanation: "變數 aa 的參考類型是 A，但其物件類型是 B。變數 bb 的參考類型是 A，物件類型是 B。變數 aaa 的參考類型和物件類型都是 A。"
    },
    {
        id: 7,
        category: "Java 物件導向",
        question: "以下哪些方法可以插入到介面中？",
        code: null,
        options: [
            "default void method(){ }",
            "static int getSpeed() {return 10; }",
            "abstract int getSpeed();",
            "public void meth();"
        ],
        correctAnswers: [0, 1, 2, 3],
        explanation: "Java 8 之後，介面可以包含 default 方法和 static 方法，這些方法可以有實作。介面也可以包含抽象方法（可以省略 abstract 關鍵字）和常數。"
    },
    {
        id: 8,
        category: "Java 物件導向",
        question: "關於以下敘述，哪些是正確的？",
        code: null,
        options: [
            "方法內宣告的變數稱為類別變數",
            "類別變數會初始化為其預設值",
            "宣告 \"short s = 10\" 中的變數 s 必須是實例變數",
            "以上都不正確"
        ],
        correctAnswers: [1],
        explanation: "方法內宣告的變數是局部變數，不是類別變數。類別變數（static 變數）會初始化為預設值。變數 s 可以是局部變數、實例變數或類別變數，取決於宣告位置。"
    },
    {
        id: 9,
        category: "Java 物件導向",
        question: "以下程式碼的執行結果是什麼？",
        code: "class Ab{\n  void meth1(){ System.out.print(\" A B\"); }\n}\nclass Cd extends Ab{\n  protected void meth1()throws NullPointerException{\n    System.out.print(\" C D\");\n  }\n}\nclass MyExamCloud{\n  public static void main(String [] args){\n    Ab cd = new Cd();\n    cd.meth1();\n  }\n}",
        options: [
            "編譯失敗，有多個錯誤",
            "輸出 C D",
            "輸出 A B",
            "編譯失敗，因為覆寫方法宣告了新的例外",
            "沒有輸出"
        ],
        correctAnswers: [1],
        explanation: "子類別可以覆寫父類別方法並宣告 unchecked 例外。此外，覆寫方法的存取修飾符可以比原方法更寬鬆（此處從 default 變為 protected）。程式會輸出 C D。"
    },
    {
        id: 10,
        category: "Java 物件導向",
        question: "以下哪個物件導向概念描述了這些方法？",
        code: "public String getAccountNumber(String customerID) {}\npublic String getAccountNumber(String customerID, Date date) {}",
        options: [
            "方法多載 (Method Overloading)",
            "方法覆寫 (Method Overriding)",
            "多型 (Polymorphism)",
            "抽象化 (Abstraction)"
        ],
        correctAnswers: [0],
        explanation: "方法多載是指在同一個類別中定義多個名稱相同但參數不同的方法。上述例子中，兩個方法名稱相同但參數列不同，這是方法多載的典型例子。"
    },
    {
        id: 11,
        category: "例外處理",
        question: "給定以下類別，catch 區塊的正確順序應該是什麼？",
        code: "class A extends Exception {}\nclass B extends A {}\nclass C extends B {}",
        options: [
            "catch Exception, A, B, C",
            "catch Exception, C, B, A",
            "catch A, B, C, Exception",
            "catch C, B, A, Exception",
            "任何順序都可以"
        ],
        correctAnswers: [3],
        explanation: "捕捉例外時，應該先捕捉較具體的例外，再捕捉較一般的例外。因此正確順序是先 C，再 B，再 A，最後是 Exception。"
    },
    {
        id: 12,
        category: "串流與 Lambda 表達式",
        question: "以下程式碼的輸出是什麼？",
        code: "import java.util.Optional;\nimport java.util.stream.Stream;\n\npublic class MyExamCloud{\n  public static void main(String[] args){\n    var strs = Stream.of(\"A\",\"B\",\"C\");\n    Optional opt = strs.limit(2).skip(1).findAny();\n    opt.ifPresent(System.out::print);\n  }\n}",
        options: [
            "A",
            "B",
            "沒有輸出",
            "拋出例外",
            "編譯失敗"
        ],
        correctAnswers: [1],
        explanation: "Stream.of(\"A\",\"B\",\"C\") 創建了含有三個元素的串流。limit(2) 將串流限制為前兩個元素 [\"A\",\"B\"]。skip(1) 跳過第一個元素，剩下 [\"B\"]。findAny() 返回任意元素，這裡只有 \"B\"。最後 ifPresent 將其印出。"
    },
    {
        id: 13,
        category: "Java 平台模組系統",
        question: "以下哪些是有效的 Java 模組系統命令列選項？",
        code: null,
        options: [
            "--module-path",
            "--class-path",
            "--add-modules",
            "--module-source-path",
            "--module-class-path"
        ],
        correctAnswers: [0, 2, 3],
        explanation: "--module-path 用於指定模組路徑，--add-modules 用於添加模組，--module-source-path 用於指定模組源碼路徑。--class-path 是傳統的類別路徑選項，不是模組特有的。--module-class-path 不是有效的選項。"
    },
    {
        id: 14,
        category: "註解",
        question: "Java 註解的用途包括哪些？",
        code: null,
        options: [
            "提供編譯器資訊",
            "軟體工具可以處理註解資訊以生成程式碼",
            "提高效能",
            "提高安全性",
            "可以檢測編譯時期錯誤"
        ],
        correctAnswers: [0, 1, 4],
        explanation: "Java 註解可以提供編譯器資訊（如 @Override），可以被工具處理以生成程式碼（如 JPA 註解），也可以用於編譯時期錯誤檢測（如 @FunctionalInterface）。但註解本身不會提高程式的效能或安全性。"
    },
    {
        id: 15,
        category: "JDBC 資料庫應用",
        question: "假設 con 是一個有效的 Connection (java.sql.Connection) 物件，以下哪個方法可以終止這個連線？",
        code: null,
        options: [
            "con.close();",
            "con.abort(Runnable::run);",
            "con.abort();",
            "con.close(Runnable::run);",
            "以上皆非"
        ],
        correctAnswers: [1],
        explanation: "Connection.abort(Executor) 方法可以強制終止連線，並使用提供的 Executor 來執行相關的清理任務。這裡使用 Runnable::run 作為 Executor。con.close() 會嘗試正常關閉連線，但不一定能立即終止。"
    },
    {
        id: 16,
        category: "串流與 Lambda 表達式",
        question: "以下程式碼的輸出是什麼？",
        code: "import java.util.HashMap;\nimport java.util.Map;\nimport java.util.function.BiFunction;\n\npublic class MyExamCloud{\n  public static void main(String[] args){\n    Map<Integer,String> numbers = new HashMap<Integer,String>();\n    numbers.put(1, \"one\");\n    numbers.put(3, \"Three\");\n    numbers.put(4, \"Four\");\n    BiFunction<Integer,String,String> func = (k,v) -> \"Two\";\n    numbers.compute(2, func);\n    System.out.println(numbers);\n  }\n}",
        options: [
            "{1=one, 2=null, 3=Three, 4=Four}",
            "{1=one, 2=Two, 3=Three, 4=Four}",
            "{1=one, 3=Three, 4=Four}",
            "編譯失敗",
            "執行時拋出例外"
        ],
        correctAnswers: [1],
        explanation: "Map.compute() 方法使用提供的 BiFunction 計算指定鍵的新值。這裡，對於鍵 2，無論原值是什麼，函數都返回 \"Two\"。因此，Map 中會新增鍵值對 2=Two。"
    },
    {
        id: 17,
        category: "Java 資料類型",
        question: "以下哪個選項會印出 \"MasterCard-xx89\"？",
        code: "var cardNumber = \"5134567891123589\";",
        options: [
            "System.out.println(\"MasterCard-xx\" + cardNumber.substring(cardNumber.length()-2));",
            "System.out.println(\"MasterCard-xx\" + cardNumber.substring(14, 16));",
            "System.out.printf(\"MasterCard-xx%s\", cardNumber.substring(cardNumber.length()-2));",
            "以上皆可"
        ],
        correctAnswers: [3],
        explanation: "所有選項都會印出 \"MasterCard-xx89\"。第一個選項使用 substring(cardNumber.length()-2) 獲取最後兩個字符。第二個選項使用 substring(14, 16) 直接指定索引。第三個選項使用 printf 格式化輸出。"
    },
    {
        id: 18,
        category: "Java 資料類型",
        question: "以下程式碼的輸出是什麼？",
        code: "String s1 = \"Java\";\nString s2 = \"Java\";\nStringBuilder sb1 = new StringBuilder();\nsb1.append(\"Ja\").append(\"va\");\nSystem.out.println(s1 == s2);\nSystem.out.println(s1.equals(s2));\nSystem.out.println(sb1.toString() == s1);\nSystem.out.println(sb1.toString().equals(s1));",
        options: [
            "true true false true",
            "true true true true",
            "false true false true",
            "false false false false"
        ],
        correctAnswers: [0],
        explanation: "s1 和 s2 都指向字串池中的同一個 \"Java\" 字串，所以 s1 == s2 是 true。s1.equals(s2) 比較內容，也是 true。sb1.toString() 創建一個新的字串物件，與 s1 不是同一個參考，所以 sb1.toString() == s1 是 false。但 sb1.toString().equals(s1) 比較內容，是 true。"
    },
    {
        id: 19,
        category: "Java 物件導向",
        question: "關於介面和抽象類別，以下哪些敘述是正確的？",
        code: null,
        options: [
            "介面可以有實例變數",
            "抽象類別可以有建構子",
            "介面可以繼承多個介面",
            "抽象類別可以實作多個介面"
        ],
        correctAnswers: [1, 2, 3],
        explanation: "介面不能有實例變數，只能有常數（public static final）。抽象類別可以有建構子，用於初始化子類別。介面可以繼承（extends）多個介面。抽象類別可以實作（implements）多個介面。"
    },
    {
        id: 20,
        category: "Java 物件導向",
        question: "以下哪個不是 Java 中有效的多型表現形式？",
        code: null,
        options: [
            "方法覆寫",
            "方法多載",
            "運算子多載",
            "參數多型"
        ],
        correctAnswers: [2],
        explanation: "Java 不支援運算子多載（Operator Overloading），這是 C++ 等語言的特性。Java 中的多型主要通過方法覆寫（Override）、方法多載（Overload）和參數多型（泛型）來實現。"
    },
    {
        id: 21,
        category: "例外處理",
        question: "關於 try-with-resources 語句，以下哪些敘述是正確的？",
        code: null,
        options: [
            "資源必須實作 AutoCloseable 介面",
            "可以在一個 try-with-resources 語句中管理多個資源",
            "資源的 close() 方法會在 finally 區塊之前呼叫",
            "try-with-resources 語句可以沒有 catch 或 finally 區塊"
        ],
        correctAnswers: [0, 1, 2, 3],
        explanation: "try-with-resources 語句中的資源必須實作 AutoCloseable 或 Closeable 介面。可以在一個語句中管理多個資源，它們會按照相反的順序關閉。資源的 close() 方法會在任何 catch 或 finally 區塊之前呼叫。try-with-resources 語句可以沒有 catch 或 finally 區塊。"
    },
    {
        id: 22,
        category: "串流與 Lambda 表達式",
        question: "以下哪個不是 Java 中的函數式介面？",
        code: null,
        options: [
            "java.util.function.Predicate<T>",
            "java.util.function.Consumer<T>",
            "java.util.function.Supplier<T>",
            "java.util.function.Iterator<T>"
        ],
        correctAnswers: [3],
        explanation: "java.util.Iterator<T> 不是函數式介面，因為它有多個抽象方法。函數式介面只能有一個抽象方法。Predicate、Consumer 和 Supplier 都是 java.util.function 包中定義的函數式介面。"
    },
    {
        id: 23,
        category: "串流與 Lambda 表達式",
        question: "以下程式碼的輸出是什麼？",
        code: "import java.util.stream.Stream;\n\npublic class MyExamCloud {\n  public static void main(String[] args) {\n    Stream<Integer> stream = Stream.of(1, 2, 3, 4, 5);\n    System.out.println(stream.filter(i -> i % 2 == 0).count());\n  }\n}",
        options: [
            "2",
            "3",
            "5",
            "編譯失敗",
            "執行時拋出例外"
        ],
        correctAnswers: [0],
        explanation: "程式碼創建一個含有 1 到 5 的串流，然後使用 filter 過濾出偶數（2 和 4），最後使用 count 計算結果串流中的元素數量，輸出 2。"
    },
    {
        id: 24,
        category: "Java 平台模組系統",
        question: "在 module-info.java 文件中，以下哪個語句用於聲明模組需要的服務？",
        code: null,
        options: [
            "requires",
            "exports",
            "provides ... with ...",
            "uses",
            "opens"
        ],
        correctAnswers: [3],
        explanation: "uses 語句用於聲明模組需要的服務。requires 用於聲明依賴的模組。exports 用於聲明模組導出的包。provides ... with ... 用於聲明模組提供的服務實現。opens 用於聲明模組開放的包。"
    },
    {
        id: 25,
        category: "JDBC 資料庫應用",
        question: "使用 JDBC 執行預備語句時，以下哪個方法用於設置 SQL 查詢中的參數？",
        code: null,
        options: [
            "PreparedStatement.set(int parameterIndex, Object x)",
            "PreparedStatement.setParameter(int parameterIndex, Object x)",
            "PreparedStatement.setObject(int parameterIndex, Object x)",
            "PreparedStatement.bindObject(int parameterIndex, Object x)"
        ],
        correctAnswers: [2],
        explanation: "PreparedStatement.setObject(int parameterIndex, Object x) 用於設置 SQL 查詢中的參數。PreparedStatement 還有其他特定類型的方法，如 setString()、setInt() 等。"
    }
];

// 全域變數
let currentQuestionIndex = 0;
let userAnswers = new Array(quizData.length).fill([]);
let timer;
let timeLeft = 30 * 60; // 30分鐘，以秒為單位

// DOM 元素
const questionCounter = document.getElementById('question-counter');
const progressBar = document.getElementById('progress-bar');
const timerElement = document.getElementById('timer');
const questionText = document.getElementById('question-text');
const codeSnippet = document.getElementById('code-snippet');
const optionsContainer = document.getElementById('options-container');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const submitButton = document.getElementById('submit-btn');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const scoreValue = document.getElementById('score-value');
const scoreMessage = document.getElementById('score-message');
const categoryAnalysis = document.getElementById('category-analysis');
const questionReview = document.getElementById('question-review');
const restartButton = document.getElementById('restart-btn');

// 初始化測驗
function initQuiz() {
    currentQuestionIndex = 0;
    userAnswers = new Array(quizData.length).fill([]);
    timeLeft = 30 * 60;

    // 顯示第一題
    showQuestion(currentQuestionIndex);

    // 開始計時器
    startTimer();

    // 顯示測驗容器，隱藏結果容器
    quizContainer.classList.remove('hidden');
    resultContainer.classList.add('hidden');

    // 更新按鈕狀態
    updateButtonStates();
}

// 顯示問題
function showQuestion(index) {
    const question = quizData[index];

    // 更新問題計數器和進度條
    questionCounter.textContent = `題目 ${index + 1}/${quizData.length}`;
    progressBar.style.width = `${((index + 1) / quizData.length) * 100}%`;

    // 設置問題文字
    questionText.textContent = question.question;

    // 處理程式碼片段
    if (question.code) {
        codeSnippet.textContent = question.code;
        codeSnippet.classList.remove('hidden');
    } else {
        codeSnippet.classList.add('hidden');
    }

    // 清空選項容器
    optionsContainer.innerHTML = '';

    // 添加選項
    question.options.forEach((option, optionIndex) => {
        const optionLabel = document.createElement('label');
        optionLabel.className = 'option-label';

        const optionInput = document.createElement('input');
        optionInput.className = 'option-input';
        optionInput.type = question.correctAnswers.length > 1 ? 'checkbox' : 'radio';
        optionInput.name = 'question';
        optionInput.value = optionIndex;
        optionInput.checked = userAnswers[index].includes(optionIndex);

        optionInput.addEventListener('change', () => {
            if (optionInput.type === 'radio') {
                userAnswers[index] = [optionIndex];
            } else {
                if (optionInput.checked) {
                    if (!userAnswers[index].includes(optionIndex)) {
                        userAnswers[index] = [...userAnswers[index], optionIndex];
                    }
                } else {
                    userAnswers[index] = userAnswers[index].filter(idx => idx !== optionIndex);
                }
            }

            // 如果是最後一題，顯示提交按鈕
            if (index === quizData.length - 1) {
                submitButton.classList.remove('hidden');
            }
        });

        const optionText = document.createElement('span');
        optionText.className = 'option-text';
        optionText.textContent = option;

        optionLabel.appendChild(optionInput);
        optionLabel.appendChild(optionText);
        optionsContainer.appendChild(optionLabel);
    });

    // 更新按鈕狀態
    updateButtonStates();
}

// 更新按鈕狀態
function updateButtonStates() {
    prevButton.disabled = currentQuestionIndex === 0;

    if (currentQuestionIndex === quizData.length - 1) {
        nextButton.classList.add('hidden');
        submitButton.classList.remove('hidden');
    } else {
        nextButton.classList.remove('hidden');
        submitButton.classList.add('hidden');
    }
}

// 開始計時器
function startTimer() {
    clearInterval(timer);

    timer = setInterval(() => {
        timeLeft--;

        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        timerElement.textContent = `剩餘時間: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            submitQuiz();
        }
    }, 1000);
}

// 計算得分
function calculateScore() {
    let score = 0;
    const results = [];

    quizData.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswers = question.correctAnswers;

        // 檢查答案是否完全正確
        const isCorrect =
            userAnswer.length === correctAnswers.length &&
            userAnswer.every(answer => correctAnswers.includes(answer));

        if (isCorrect) {
            score += 4; // 每題4分
        }

        results.push({
            question: question.question,
            userAnswer,
            correctAnswers,
            isCorrect,
            explanation: question.explanation,
            category: question.category,
            options: question.options,
            code: question.code
        });
    });

    return { score, results };
}

// 分析結果
function analyzeResults(results) {
    // 按類別分組
    const categories = {};

    results.forEach(result => {
        if (!categories[result.category]) {
            categories[result.category] = {
                total: 0,
                correct: 0
            };
        }

        categories[result.category].total++;
        if (result.isCorrect) {
            categories[result.category].correct++;
        }
    });

    return categories;
}

// 提交測驗
function submitQuiz() {
    clearInterval(timer);

    const { score, results } = calculateScore();
    const categories = analyzeResults(results);

    // 顯示分數
    scoreValue.textContent = score;

    // 設置分數訊息
    if (score >= 80) {
        scoreMessage.textContent = '恭喜！您已經掌握了 Java OCP 的核心概念，表現優秀！';
    } else if (score >= 60) {
        scoreMessage.textContent = '不錯的表現！您對 Java OCP 有一定的理解，繼續努力！';
    } else {
        scoreMessage.textContent = '需要加強！建議您重新學習 Java OCP 的基礎概念。';
    }

    // 顯示類別分析
    categoryAnalysis.innerHTML = '';

    Object.entries(categories).forEach(([category, data]) => {
        const percentage = (data.correct / data.total) * 100;

        const categoryItem = document.createElement('div');
        categoryItem.className = 'category-item';

        const categoryName = document.createElement('div');
        categoryName.className = 'category-name';

        const nameSpan = document.createElement('span');
        nameSpan.textContent = category;

        const percentageSpan = document.createElement('span');
        percentageSpan.textContent = `${data.correct}/${data.total} (${percentage.toFixed(0)}%)`;

        categoryName.appendChild(nameSpan);
        categoryName.appendChild(percentageSpan);

        const categoryBar = document.createElement('div');
        categoryBar.className = 'category-bar';

        const categoryProgress = document.createElement('div');
        categoryProgress.className = 'category-progress';
        categoryProgress.style.width = `${percentage}%`;

        categoryBar.appendChild(categoryProgress);

        categoryItem.appendChild(categoryName);
        categoryItem.appendChild(categoryBar);

        categoryAnalysis.appendChild(categoryItem);
    });

    // 顯示問題回顧
    questionReview.innerHTML = '';

    results.forEach((result, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = `question-review-item ${result.isCorrect ? 'correct' : 'incorrect'}`;

        const questionTitle = document.createElement('h4');
        questionTitle.textContent = `問題 ${index + 1}: ${result.question}`;

        reviewItem.appendChild(questionTitle);

        // 顯示程式碼（如果有）
        if (result.code) {
            const codeBlock = document.createElement('pre');
            codeBlock.className = 'code-container';
            codeBlock.textContent = result.code;
            reviewItem.appendChild(codeBlock);
        }

        // 顯示使用者答案
        const userAnswerDiv = document.createElement('div');
        userAnswerDiv.className = `user-answer ${result.isCorrect ? 'correct' : 'incorrect'}`;

        if (result.userAnswer.length === 0) {
            userAnswerDiv.textContent = '您的答案: 未作答';
        } else {
            const userAnswerText = result.userAnswer
                .map(idx => `${String.fromCharCode(65 + idx)}. ${result.options[idx]}`)
                .join(', ');
            userAnswerDiv.textContent = `您的答案: ${userAnswerText}`;
        }

        reviewItem.appendChild(userAnswerDiv);

        // 顯示正確答案
        const correctAnswerDiv = document.createElement('div');
        correctAnswerDiv.className = 'correct-answer';

        const correctAnswerText = result.correctAnswers
            .map(idx => `${String.fromCharCode(65 + idx)}. ${result.options[idx]}`)
            .join(', ');
        correctAnswerDiv.textContent = `正確答案: ${correctAnswerText}`;

        reviewItem.appendChild(correctAnswerDiv);

        // 顯示解釋
        const explanationDiv = document.createElement('div');
        explanationDiv.className = 'explanation';
        explanationDiv.textContent = `解釋: ${result.explanation}`;

        reviewItem.appendChild(explanationDiv);

        questionReview.appendChild(reviewItem);
    });

    // 隱藏測驗容器，顯示結果容器
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
}

// 事件監聽器
prevButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
});

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
});

submitButton.addEventListener('click', submitQuiz);

restartButton.addEventListener('click', initQuiz);

// 初始化測驗
document.addEventListener('DOMContentLoaded', initQuiz);
