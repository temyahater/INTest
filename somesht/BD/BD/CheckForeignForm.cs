﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Runtime.InteropServices;

namespace BD
{
    public partial class CheckForeignForm : Form
    {
        public const int WM_NCLBUTTONDOWN = 0xA1;
        public const int HT_CAPTION = 0x2;

        [DllImportAttribute("user32.dll")]
        public static extern int SendMessage(IntPtr hWnd, int Msg, int wParam, int lParam);
        [DllImportAttribute("user32.dll")]
        public static extern bool ReleaseCapture();

        DataBaseInformation dbi;

        public string key { get; set; }

        public CheckForeignForm()
        {
            InitializeComponent();
        }

        public CheckForeignForm(string tableName, string command, string key = "")
        {
            const int captionHeight = 25;
            InitializeComponent();

            //Shitty:dddd
            var topPanel = new Panel();
            topPanel.Height = captionHeight;
            topPanel.Width = ClientSize.Width;
            topPanel.BackColor = Color.FromArgb(72, 61, 139);
            topPanel.MouseDown += TitleMouseDown;

            var exitBtn = new Button();
            exitBtn.Text = "";
            exitBtn.TextAlign = ContentAlignment.MiddleCenter;
            exitBtn.Height = 15;
            exitBtn.Width = 15;
            exitBtn.Left = ClientSize.Width - exitBtn.Width - 5;
            exitBtn.Top = 5;
            exitBtn.Click += exitButton;
            exitBtn.FlatStyle = FlatStyle.Flat;
            exitBtn.FlatAppearance.BorderSize = 0;
            exitBtn.BackColor = Color.FromArgb(220, 20, 60);
            exitBtn.ForeColor = Color.FromArgb(255, 255, 255);
            //

            var capt = new Label();
            capt.Left = 5;
            capt.Top = 5;
            capt.Height = topPanel.Height - capt.Top;
            capt.Width = exitBtn.Left-capt.Left;
            capt.Text = tableName;
            capt.ForeColor = Color.White;
            capt.BackColor = topPanel.BackColor;
            capt.MouseDown += TitleMouseDown;

            Controls.Add(capt);
            Controls.Add(exitBtn);
            Controls.Add(topPanel);

            dbi = new DataBaseInformation(tableName);
            Text = tableName;
            this.key = key;
            UpdateDataGridViewSQL(command);

            if (key != "")
            {
                foreach (DataGridViewRow row in gridOutput.Rows)
                {
                    if (row.Cells[dbi.PrimaryKeys[0]].Value.ToString() == key)
                    {
                        for(int i=0;i<row.Cells.Count;i++)
                            if(row.Cells[i].Visible)
                            {
                                gridOutput.CurrentCell = row.Cells[i];
                                return;
                            }
                    }
                }

            }
            
        }

        private void UpdateDataGridViewSQL(string commandText)
        {
            dbi.Update(commandText);

            foreach (var el in dbi.Headers)
            {
                if (el.cellType == HeaderCellType.Foreign)
                {
                    DataGridViewButtonColumn btn = new DataGridViewButtonColumn();
                    btn.HeaderText = el.value;
                    btn.Name = el.value;
                    btn.FlatStyle = FlatStyle.Flat;
                    gridOutput.Columns.Add(btn);
                }
                else
                    gridOutput.Columns.Add(el.value, el.value);
            }

            for (int i = 0; i < dbi.Table.Rows.Count; i++)
            {
                gridOutput.Rows.Add(dbi.Table.Rows[i].ItemArray);
            }

            gridOutput.Columns[dbi.PrimaryKeys[0]].Visible = false;
        }

        private void CheckForeignForm_Load(object sender, EventArgs e)
        {
            
        }

        private void gridOutput_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            var senderGrid = (DataGridView)sender;

            if (senderGrid.Columns[e.ColumnIndex] is DataGridViewButtonColumn &&
                e.RowIndex >= 0)
            {
                string colName = dbi.Headers[e.ColumnIndex].toColumnName;
                string keyValue = dbi.Table.Rows[e.RowIndex].ItemArray[e.ColumnIndex].ToString();
                string tableName = dbi.Headers[e.ColumnIndex].toTableName;

                string command = "select * from [" + tableName + "] where [" + colName + "] = \'" + keyValue + "\'";

                (new CheckForeignForm(tableName, command)).ShowDialog();
            }
        }

        private void gridOutput_SelectionChanged(object sender, EventArgs e)
        {
            if (key == "") return;
            key = gridOutput.SelectedRows[0].Cells[dbi.PrimaryKeys[0]].Value.ToString();
        }

        private void CheckForeignForm_Activated(object sender, EventArgs e)
        {
            
        }

        private void gridOutput_Validated(object sender, EventArgs e)
        {
            
        }

        private void gridOutput_Layout(object sender, LayoutEventArgs e)
        {
        }

        private void TitleMouseDown(object sender, MouseEventArgs e)
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
