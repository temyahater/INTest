using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data.SqlClient;
using System.Configuration;
using System.Runtime.InteropServices;
using System.IO;
using System.Reflection;

namespace BD
{
    public partial class MainForm : Form
    {
        public const int WM_NCLBUTTONDOWN = 0xA1;
        public const int HT_CAPTION = 0x2;

        [DllImportAttribute("user32.dll")]
        public static extern int SendMessage(IntPtr hWnd, int Msg, int wParam, int lParam);
        [DllImportAttribute("user32.dll")]
        public static extern bool ReleaseCapture();

        public MainForm()
        {
            InitializeComponent();
        }

        private void MainForm_Load(object sender, EventArgs e)
        {
            const int captionHeight = 25;
            const int leftOffset = 10;
            const int topOffset = 10+captionHeight;
            const int downOffset = 10;
            const int destBetweenH = 10;
            const int defWidth = 400;

            string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

            SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder(connectionString);

            string database = builder.InitialCatalog;

            string sqlExpression = "SELECT TABLE_NAME FROM ["+database+"].INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'";
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                SqlCommand command = new SqlCommand(sqlExpression, connection);
                SqlDataReader reader = command.ExecuteReader();

                List<Button> testButtons = new List<Button>();
                Button temp = null;

                for (int i=0; reader.Read(); i++)
                {
                    temp = new Button();
                    temp.Text = reader.GetString(0);
                    temp.Width = defWidth;
                    temp.Left = leftOffset;
                    temp.Top = topOffset + (temp.Height + destBetweenH) * i;
                    temp.Click += ButtonClickHandler;
                    temp.FlatStyle = FlatStyle.Flat;
                    temp.FlatAppearance.BorderSize = 0;
                    temp.BackColor = Color.FromArgb(221, 160, 221);
                    temp.ForeColor = Color.FromArgb(0,0,0);
                    testButtons.Add(temp);
                }

                BackColor = Color.FromArgb(106, 90, 205);
                ClientSize = new Size(leftOffset * 2 + temp.Width, temp.Top + temp.Height + downOffset);

                var topPanel = new Panel();
                topPanel.Height = captionHeight;
                topPanel.Width = ClientSize.Width;
                topPanel.BackColor = Color.FromArgb(72, 61, 139);
                topPanel.ForeColor = Color.FromArgb(0, 0, 0);
                topPanel.MouseDown += TitleMouseDown;

                var exitBtn = new Button();
                exitBtn.Text = "";
                exitBtn.TextAlign = ContentAlignment.MiddleCenter;
                exitBtn.Height = 15;
                exitBtn.Width = 15;
                exitBtn.Left = ClientSize.Width- exitBtn.Width - 5;
                exitBtn.Top = 5;
                exitBtn.Click += exitButton;
                exitBtn.FlatStyle = FlatStyle.Flat;
                exitBtn.FlatAppearance.BorderSize = 0;
                exitBtn.BackColor = Color.FromArgb(220, 20, 60);
                exitBtn.ForeColor = Color.FromArgb(255, 255, 255);
                
                var capt = new Label();
                capt.Left = 5;
                capt.Top = 5;
                capt.Height = topPanel.Height - capt.Top;
                capt.Width = exitBtn.Left - capt.Left;
                capt.Text = builder.InitialCatalog + " the best datebase in the world";
                capt.ForeColor = Color.White;
                capt.BackColor = topPanel.BackColor;
                capt.MouseDown += TitleMouseDown;

                Controls.Add(capt);

                Controls.Add(exitBtn);
                Controls.Add(topPanel);
                Controls.AddRange(testButtons.ToArray());

                reader.Close();

                DoubleBuffered = true;
            }
        }


        private void ButtonClickHandler(object sender, EventArgs e)
        {
            Hide();
            (new WorkerForm(this,((Button)sender).Text)).Show();
        }

        private void TitleMouseDown(object sender,MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Left)
            {
                ReleaseCapture();
                SendMessage(Handle, WM_NCLBUTTONDOWN, HT_CAPTION, 0);
            }
        }

        private void exitButton(object sender, EventArgs e)
        {
            Close();
        }
    }
}
