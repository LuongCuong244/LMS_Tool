let json = []

json = '[{"question":"Các hoạt động của máy tính gồm?","answer":"Thực hiện Chương trình, ngắt, vào/ra"},{"question":"Các thành phần bắt buộc tạo thành một máy tính?","answer":"Hệ thống nhớ, Bộ xử lý, Hệ thống vào/ra, Bus liên kết"},{"question":"Theo khái niệm về máy tính điện tử (Computer) là thiết bị điện tử thực hiện các công việc sau?","answer":"Nhận thông tin vào; Xử lý thông tin theo dãy các lệnh được nhớ sẵn bên trong; Đưa thông tin ra;"},{"question":"Tín hiệu điều khiển INTA là tín hiệu?","answer":"CPU trả lời chấp nhận ngắt"},{"question":"Trong các giai đoạn phát triển của máy tính, phát biểu nào sau đây là đúng?","answer":"Thế hệ thứ nhất dùng đèn điện tử chân không"},{"question":"Chức năng của BUS dữ liệu là?","answer":"vận chuyển lệnh từ bộ nhớ đến CPU; vận chuyển dữ liệu giữa CPU, mô đun nhớ, mô đun vào-ra với nhau;"},{"question":"Chức năng của Mô-đun vào/ra là?","answer":"nối ghép các thiết bị ngoại vi với máy tính;"},{"question":"Máy tính Von Neumann là máy tính?","answer":"Cả (1) và (3)"},{"question":"Tín hiệu điều khiển IOR là tín hiệu?","answer":"Đọc dữ liệu từ TBNV"},{"question":"Với tín hiệu điều khiển NMI, phát biểu nào sau đây là SAI?","answer":"Là tín hiệu ngắt chắn được"},{"question":"Với tín hiệu điều khiển INTA, phát biểu nào sau đây là SAI?","answer":"Là tín hiệu điều khiển ghi cổng vào/ra"},{"question":"Phân loại máy tính điện tử (Computer) theo quan điểm truyền thống:","answer":"Máy vi tính (Microcomputers); Máy tính nhỏ (Minicomputers); Máy tính lớn (Mainframe Computers); Siêu máy tính (Supercomputers);"},{"question":"Tín hiệu điều khiển MEMR là tín hiệu?","answer":"Đọc lệnh/dữ liệu từ ngăn nhớ"},{"question":"Tín hiệu điều khiển INTR là tín hiệu?","answer":"Từ bên ngoài gửi đến CPU xin ngắt"},{"question":"Với tín hiệu điều khiển IOW, phát biểu nào sau đây là SAI?","answer":"Là tín hiệu từ bên ngoài xin ngắt cổng vào/ra"},{"question":"Trong máy tính, ngắt NMI là?","answer":"Ngắt cứng không chắn được"},{"question":"Độ rộng của BUS dữ liệu và địa chỉ là?","answer":"số đường dây của bus có thể truyền các bit thông tin đồng thời"},{"question":"Chức năng chính của hệ thống vào/ra là?","answer":"Trao đổi thông tin giữa máy tính với thế giới bên ngoài;"},{"question":"Phát biểu nào sau đây là đúng?","answer":"INTR là tín hiệu cứng chắn được"},{"question":"Trong máy tính, có các loại bus liên kết hệ thống như sau?","answer":"Điều khiển, Dữ liệu, Địa chỉ"},{"question":"Tín hiệu điều khiển MEMW là tín hiệu?","answer":"Ghi dữ liệu ra ngăn nhớ"},{"question":"Chức năng của bộ nhớ chính (main memory) là?","answer":"Chứa các chương trình và dữ liệu đang được CPU sử dụng;"},{"question":"Các thành phần chính của hệ thống vào/ra gồm?","answer":"Các thiết bị ngoại vi (Peripheral Devices); Các mô-đun vào-ra (IO Modules);"},{"question":"Các loại BUS được sử dụng trong kiến trúc vào/ ra của máy tính số là?","answer":"Cả 3 loại BUS: Dữ liệu, địa chỉ, điều khiển"},{"question":"Bộ đếm Chương trình của máy tính không phải là?","answer":"Thanh ghi chứa lệnh sắp thực hiện"},{"question":"Với tín hiệu điều khiển IOR, phát biểu nào sau đây là SAI?","answer":"Là tín hiệu điều khiển truy nhập CPU"},{"question":"Máy tính ENIAC là máy tính?","answer":"Là máy tính đầu tiên trên thế giới"},{"question":"Tín hiệu điều khiển HOLD là tín hiệu?","answer":"Từ bên ngoài gửi đến CPU xin dùng bus"},{"question":"Đặc điểm của BUS dành riêng là?","answer":"Các đường địa chỉ và dữ liệu tách rời; Ưu điểm: điều khiển đơn giản; Nhược điểm: có nhiều đường kết nối;"},{"question":"Hệ thống vào/ra của máy tính không bao gồm đồng thời các thiết bị sau?","answer":"ROM, RAM, Các thanh ghi"},{"question":"Với tín hiệu điều khiển INTR, phát biểu nào sau đây là SAI?","answer":"Là tín hiệu điều khiển do CPU phát ra"}]'

let data = JSON.parse(json);

class QuestionAnswer {
    constructor(question, answer) {
      this.question = question;
      this.answer = answer;
    }
}

function findCorrectAnswerIndex(question, options){
    for(const index in options){

        let expectationAnswer = options[index];
        
        let hasCorrectAnswer = data.some((item) => {
            return item.question == question && item.answer == expectationAnswer;
        })

        if(hasCorrectAnswer){
            return index;
        }
    }
    return -1;
}

function completeQuestions(){
    let i = 0;
    while(true){
        let id = "mainViewPanel-" + i;
        let mainPanel = document.getElementById(id);
        if(!mainPanel){
            break;
        }

        let questionSentence = mainPanel.getElementsByClassName('card-game-content')[0].textContent;
        
        let options = Array.from(mainPanel.getElementsByClassName('gameViewPanel')[0].getElementsByClassName('ks-checkBox')).map(e => e.getElementsByClassName('gwt-HTML')[0].textContent.slice(3))
        
        let correctAnswerIndex = findCorrectAnswerIndex(questionSentence, options);

        let sheetItemId = "answerSheetItem-" + i;
        let sheetItem = document.getElementById(sheetItemId);
        if(!sheetItem){
            break;
        }
        let button = sheetItem.getElementsByTagName('button')[Math.max(0, correctAnswerIndex)];
        button.click();

        if(correctAnswerIndex == -1){
            let correctAnswerTable = mainPanel.getElementsByClassName('ks-checkBox cardAnswer-correct')[0];
            let answerSentence = correctAnswerTable.getElementsByClassName('gwt-HTML')[0].textContent.slice(3);
            let result = new QuestionAnswer(questionSentence, answerSentence)
            data.push(result)
        }

        i++;
    }

    console.log("Total: " + data.length)
    console.log(JSON.stringify(data))
}
completeQuestions();