class Cart():
    def __init__(self,request):
        self.session = request.session
        
        cart = self.session.get('session_key')
    
    
        if 'session_key' not in request.session:
            cart= self.session['session_key'] = {}
        
        
        
        self.cart = cart
    
    def add(self,product):
        prduct_id = str(product_id)
        
        
        # logic
        if product_id in delf.cart