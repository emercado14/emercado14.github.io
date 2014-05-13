<body>
                <p id="coo">Guess what </p>
                <input type="button" onclick="changeText()" value="click me" />
                <p id="no"> Whatever you do, do not click the button </p>
                <input type="button" onclick="change()" value="click me" >

               <script type="text/javascript">
                        function changeText() {
                                // alert("hi");
                                $("#coo").html("eddy was here");
                                $("#coo").fadeOut();
                        }

                        function change() {
                                // do something when fade out finished
                                $("#no").html()
                                $("#no").mouseleave();
                                alert("You just got trolled");
                        }


                </script>
