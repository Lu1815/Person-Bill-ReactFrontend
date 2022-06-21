# USER - BILL APP

App made to get this [SPRING BOOT API](https://github.com/Lu1815/Person-Bill-SpringBackend) backend enpoints.
One important thing is to have the last stable version of node (16), if you try to run this app with higher versions it'll have issues with webpack.

It's basically a screen to register and delete users.

![](https://i.imgur.com/vLmpX9j.png)

Once there are registers in the user table, the table component renders in the view.

![](https://i.imgur.com/DCUev8W.png)

There is another screen which was not required but, there it is anyway and was made just to save bills (facturas). The difference here is that to remove a factura you need to delete its user (persona). If you delete a user all his bills (facturas) are going to be deleted too.
