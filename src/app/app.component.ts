import { Component } from '@angular/core';
import jsPDFInvoiceTemplate, { OutputType } from 'jspdf-invoice-template';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'generatepdf';

  employeeData = [
    {
      id : 1,
      name : 'revati',
      email : 'revati@gmail.com',
      mobileNum : 6379880586
    },
    {
      id : 1,
      name : 'revati',
      email : 'revati@gmail.com',
      mobileNum : 6379880586
    },
    {
      id : 1,
      name : 'revati',
      email : 'revati@gmail.com',
      mobileNum : 6379880586
    },
    {
      id : 1,
      name : 'revati',
      email : 'revati@gmail.com',
      mobileNum : 6379880586
    },
    {
      id : 1,
      name : 'revati',
      email : 'revati@gmail.com',
      mobileNum : 6379880586
    },
    {
      id : 1,
      name : 'revati',
      email : 'revati@gmail.com',
      mobileNum : 6379880586
    },
    {
      id : 1,
      name : 'revati',
      email : 'revati@gmail.com',
      mobileNum : 6379880586
    },
    {
      id : 1,
      name : 'revati',
      email : 'revati@gmail.com',
      mobileNum : 6379880586
    },
    {
      id : 1,
      name : 'revati',
      email : 'revati@gmail.com',
      mobileNum : 6379880586
    },
    {
      id : 1,
      name : 'revati',
      email : 'revati@gmail.com',
      mobileNum : 6379880586
    },
    {
      id : 1,
      name : 'revati',
      email : 'revati@gmail.com',
      mobileNum : 6379880586
    },
  ] 
  

   props : any = {
    outputType: OutputType.Save,
    returnJsPDFDocObject: true,
    fileName: "Invoice 2021",
    orientationLandscape: false,
    compress: true,
    logo: {
        src: "data:image/png;base64,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",
        type: 'PNG', 
        width: 53.33, 
        height: 26.66,
        margin: {
            top: 0, 
            left: 0 
        }
    },
    stamp: {
        inAllPages: true, 
        src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/qr_code.jpg",
        type: 'JPG', 
        width: 20, 
        height: 20,
        margin: {
            top: 0,
            left: 0 
        }
    },
    contact: {
        label: "Invoice issued for:",
        name: "Client Name",
        address: "Albania, Tirane, Astir",
        phone: "(+355) 069 22 22 222",
        email: "client@website.al",
        otherInfo: "www.website.al",
    },
    invoice: {
        label: "Invoice #: ",
        num: 19,
        invDate: "Payment Date: 01/01/2021 18:12",
        invGenDate: "Invoice Date: 02/02/2021 10:17",
        headerBorder: false,
        tableBodyBorder: false,
        header: [
          {
            title: "#", 
            style: { 
              width: 10 
            } 
          }, 
          { 
            title: "Title",
            style: {
              width: 30
            } 
          }, 
          { 
            title: "Description",
            style: {
              width: 80
            } 
          }, 
          { title: "Price"},
          { title: "Quantity"},
          { title: "Unit"},
          { title: "Total"}
        ],
        table: Array.from(Array(60), (item, index)=>([
            index + 1,
            "There are many variations ",
            "Lorem Ipsum is simply dummy text dummy text ",
            200.5,
            4.5,
            "m2",
            400.5
        ])),
        additionalRows: [{
            col1: 'Total:',
            col2: '145,250.50',
            col3: 'ALL',
            style: {
                fontSize: 14 
            }
        },
        {
            col1: 'VAT:',
            col2: '20',
            col3: '%',
            style: {
                fontSize: 10 
            }
        },
        {
            col1: 'SubTotal:',
            col2: '116,199.90',
            col3: 'ALL',
            style: {
                fontSize: 10 
            }
        }],
        invDescLabel: "Invoice Note",
        invDesc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
    },
    footer: {
        text: "The invoice is created on a computer and is valid without the signature and stamp.",
    },
    pageEnable: true,
    pageLabel: "Page ",
};

generatePDF(){
  var pdfObject = jsPDFInvoiceTemplate(this.props);

  console.log(this.props);
}

}